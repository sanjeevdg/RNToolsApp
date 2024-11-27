import React, { Fragment, useRef,useState,useEffect,useCallback } from 'react';

import {  
  SafeAreaView,Linking,StyleSheet,TextInput,Button,ScrollView,
  Text,Image,Platform,View,ActivityIndicator,FlatList,TouchableOpacity,
  Animated, Dimensions, Easing, Keyboard, LogBox, KeyboardAvoidingView,StatusBar
} from 'react-native';


import FaIcon from 'react-native-vector-icons/FontAwesome';
import SvgArrowRight from './svgComponents/SvgArrowRight';
import SvgAnswerIcon from './svgComponents/SvgAnswerIcon';
import MenuIcon from './svgComponents/MenuIcon';


/*
JosefinSans-Bold
JosefinSans-BoldItalic
JosefinSans-Light
JosefinSans-Medium
JosefinSans-Regular
JosefinSans-SemiBold
*/



export default function RecipeMealScreen({ route, navigation}) {

 const dimensions = Dimensions.get('window');
    const screenWidth = dimensions.width;

const [recipeItems,setRecipeItems ] = useState([]);

const category = route.params.category;

console.log('routeparam=',route.params.category);

useEffect(() => {

const fetchCategories = async () => {

console.log('one')
//www.themealdb.com/api/json/v1/1/search.php?s=
//https://tasty.p.rapidapi.com/recipes/list?from=0&size=1&q=
const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`+ encodeURIComponent(category);
       
        try { 
            const response = await fetch(url);
            const result = await response.json();
         //   const responseObject = JSON.parse(result);
            console.log('responseObject==>',result);
            setRecipeItems(result.meals);
        } catch (error) {
            console.log(error);
            alert("Please Try Again! Some Error Occurred at your side");
        }

}


fetchCategories();

}, []) 


/*
 
       <View style={{zIndex:999,backgroundColor:'red'}} >
</View>



*/


function renderItem(item) {



return (
   
 <View style={{display:'flex' }} >

  <TouchableOpacity onPress={() =>{console.log('passparm2=',item.idMeal); navigation.navigate('MealDetail',{'idmeal':item.idMeal} );}} style={styles.item}>
    <Text style={styles.title}>{item.strMeal}</Text>
  </TouchableOpacity>

<Image source={{
       uri: item.strMealThumb,
       cache: 'only-if-cached',
      }}
      style={{ width: '100%' ,height:250 }}
           />

</View>

)



}


return (
<SafeAreaView style={styles.container}>

<View style={{
             flex: 1,
             width: screenWidth,
         }}>

 { (recipeItems.length !== 0) && 
 			<FlatList
                style={{
             flex: 1,
             width: screenWidth,
         		}}
         		data={recipeItems}
         		renderItem={ ({item})  => renderItem(item)}                
                 keyExtractor={item => item.idMeal.toString()}
                 extraData={item => item.idMeal} 
                  />
		}

	</View>
</SafeAreaView>


	)






}

const styles = StyleSheet.create({
      container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    width:'100%',
    marginVertical: 8,
    marginHorizontal: 1,
  },
  title: {
    fontSize: 32,
    fontFamily:'JosefinSans-Regular',
    color:'black'
  },
    list: {
        flex: 0.5,
        fontSize: 16,
        fontFamily:'JosefinSans-Regular',
        color:'black'
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        color:'black'
    },
    listTitle: {
        fontSize: 22,
        fontFamily:'JosefinSans-Regular',
        color:'black'
    },
    
});