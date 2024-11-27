import React, { memo,Fragment, useRef,useState,useEffect,useCallback } from 'react';

import {  
  SafeAreaView,Linking,StyleSheet,TextInput,Button,ScrollView,
  Text,Image,Platform,View,ActivityIndicator,FlatList,TouchableOpacity,
  Animated, Dimensions, Easing, Keyboard, LogBox, KeyboardAvoidingView,StatusBar,
  useWindowDimensions
} from 'react-native';


//import { TabView, SceneMap } from 'react-native-tab-view';

//import { Tabs } from 'react-native-collapsible-tab-view';


import {Input} from 'react-native-elements';

import FaIcon from 'react-native-vector-icons/FontAwesome';
import SvgArrowRight from './svgComponents/SvgArrowRight';
import SvgAnswerIcon from './svgComponents/SvgAnswerIcon';
import MenuIcon from './svgComponents/MenuIcon';

import { styles } from "./Styles2";


export default function RecipeCategoryView({ route, navigation}) {

 const dimensions = Dimensions.get('window');
    const screenWidth = dimensions.width;


 
const [recipeItems,setRecipeItems ] = useState([]);


useEffect(() => {

const fetchCategories = async () => {

console.log('one')
//www.themealdb.com/api/json/v1/1/search.php?s=
//https://tasty.p.rapidapi.com/recipes/list?from=0&size=1&q=
const url = `http://www.themealdb.com/api/json/v1/1/categories.php`;
       
        try { 
            const response = await fetch(url);
            const result = await response.json();
         //   const responseObject = JSON.parse(result);
            console.log('responseObject==>',result);
            setRecipeItems(result.categories);
        } catch (error) {
            console.log(error);
            alert("Please Try Again! Some Error Occurred at your side"+error);
        }

}


fetchCategories();

}, []);



function renderItem(item) { 
   return (
    
 <View style={{display:'flex',marginBottom:15,width:screenWidth,alignSelf:'center'}} >

  <TouchableOpacity onPress={() => { console.log('xyzspassparm',item.strCategory); navigation.navigate('Meals',{'category':item.strCategory});}} style={styles.item} >
    <Text style={styles.title}>{item.strCategory}</Text>
  </TouchableOpacity>
  

<Image source={{
       uri: item.strCategoryThumb,
       cache: 'only-if-cached',
      }}
      style={{ width: '100%' ,height:250 }}
           />

<Text style={{fontSize:16,color:'black',fontFamily:'JosefinSans-Regular'}} >


{item.strCategoryDescription.substring(0,250)}


</Text>

</View>
)
}


/*
<Text>{item.$t}</Text>
<View style={{
             flex: 1,
             width: screenWidth,
         }}>

</View>

*/


return (
<SafeAreaView style={styles.container}>
 <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{alignItems:'center',alignSelf:'center',}} >
  
     <Text style={{fontSize:20, alignSelf:'center',color:'#0984e3',fontFamily:'JosefinSans-SemiBold'}} >Search Recipe</Text>  

</TouchableOpacity>

 {(recipeItems.length !== 0) && 
      <FlatList
                style={{
             flex: 1,
             width:screenWidth             
            }}
            data={recipeItems}
            renderItem={ ({item})  => renderItem(item)}                
                 keyExtractor={item => item.idCategory.toString()}
                 extraData={item => item.idCategory} 
                  />
    }

</SafeAreaView>
)

}

