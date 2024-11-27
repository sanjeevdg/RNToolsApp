import React, { memo,Fragment, useRef,useState,useEffect,useCallback } from 'react';

import {  
  SafeAreaView,Linking,StyleSheet,TextInput,Button,ScrollView,
  Text,Image,Platform,View,ActivityIndicator,FlatList,TouchableOpacity,
  Animated, Dimensions, Easing, Keyboard, LogBox, KeyboardAvoidingView,StatusBar,
  useWindowDimensions
} from 'react-native';


// import { TabView, SceneMap } from 'react-native-tab-view';

//import { Tabs } from 'react-native-collapsible-tab-view';


import {Input} from 'react-native-elements';

import FaIcon from 'react-native-vector-icons/FontAwesome';
import SvgArrowRight from './svgComponents/SvgArrowRight';
import SvgAnswerIcon from './svgComponents/SvgAnswerIcon';
import MenuIcon from './svgComponents/MenuIcon';

import { styles } from "./Styles2";


function HomeScreen({ route, navigation}) {

 const dimensions = Dimensions.get('window');
    const screenWidth = dimensions.width;


const [mealSearchItems,setMealSearchItems]= useState([]);


const [searchTerm,setSearchTerm] = useState('');



const searchTheMealDb = async() => {


const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=` + encodeURIComponent(searchTerm) ;
       
        try { 
            const response = await fetch(url);
            const result = await response.json();
         //   const responseObject = JSON.parse(result);
            console.log('responseObject==>',result);
            setMealSearchItems(result.meals);
        } catch (error) {
            console.log(error);
            alert("Please Try Again! Some Error Occurred at your side");
        }





}

function renderMealSearchItem(item) {


return (


<View style={{
             width: screenWidth,
         }}>

<TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{item.strMeal}</Text>
  </TouchableOpacity>
 
<Image source={{
       uri: item.strMealThumb,
       cache: 'only-if-cached',
      }}
      style={{ width: '100%' ,height:250,marginBottom:10 }}
           />

<ScrollView contentContainerStyle={{width:'90%',alignSelf:'center',marginBottom:500}}>
  <Text style={{fontSize:20,fontFamily:'JosefinSans-SemiBold'}} >Cooking Instructions</Text>
<Text style={{fontSize:16,lineHeight:22,color:'black',whiteSpace: 'pre-wrap',marginBottom:500,fontFamily:'JosefinSans-Regular'}} >


{item.strInstructions}




</Text>
</ScrollView>
</View>

)
 

}


return (
<>
<View style={{display: 'flex',flexDirection: 'row',width: '100%',marginTop:15 }} >

 <Input
          editable
          multiline
          numberOfLines={4}
          placeholder="enter keywords"
          maxLength={40}
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
          inputContainerStyle=
                        {{borderColor:'black',width:'65%',height:45,borderWidth:1,borderRadius:8}}
          inputStyle={{display:'flex'} }
        />  


<TouchableOpacity onPress={searchTheMealDb}
  style={{
        backgroundColor: '#0984e3',
        borderRadius: 8,
        flexDirection:'row',
        height: 45,
        marginLeft:-130,
        marginTop:1,
        width:'30%',
        alignItems: 'center',
        alignSelf:'flex-start',
        justifyContent: 'center',
     }} ><FaIcon name="search" color={'white'} size={25} />
     <Text style={{fontSize:20, color:'white',fontFamily:'JosefinSans-SemiBold'}} >Search</Text>  
</TouchableOpacity>
</View>

<TouchableOpacity onPress={() => navigation.navigate('RecipeCategoryView')} >
  
     <Text style={{fontSize:20, alignSelf:'center',color:'#0984e3',fontFamily:'JosefinSans-SemiBold'}} >View Categories</Text>  

</TouchableOpacity>

 
<View style={{
             flex: 1,
             width: screenWidth,
         }}>
  {(mealSearchItems.length !== 0) && (
      <FlatList
                style={{
             flex: 1,
             width:screenWidth             
            }}
            data={mealSearchItems}
            renderItem={ ({item})  => renderMealSearchItem(item)}                
                 keyExtractor={item => item.idMeal.toString()}
                 extraData={item => item.idMeal} 
                  />)}
  </View>

  </>


)

}

export default memo(HomeScreen)