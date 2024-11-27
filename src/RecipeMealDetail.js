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






export default function RecipeMealDetail({ route, navigation}) {

 const dimensions = Dimensions.get('window');
    const screenWidth = dimensions.width;

const [recipeItems,setRecipeItems ] = useState({});


const idmeal = route.params.idmeal;

console.log('myidmeal==',idmeal);
useEffect(() => {

const fetchCategories = async () => {

console.log('recmealdtl')
//www.themealdb.com/api/json/v1/1/search.php?s=
//https://tasty.p.rapidapi.com/recipes/list?from=0&size=1&q=
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`+idmeal ;
       
        try { 
            const response = await fetch(url);
            const result = await response.json();
         //   const responseObject = JSON.parse(result);
            console.log('responseObject==>',result);
            setRecipeItems(result.meals[0]);
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






function renderItem(item) {

strInstructions

strIngredient1
strMeasure1

strMeal

strMealThumb
strYoutube

return (
   
 <View style={{display:'flex' }} >

  

)



}
*/


//renderItem={item => renderItem(item)}

const Item = ({ title}) => {

console.log('strtitle==',title)
return (
	
  <View style={styles.item}>
    	<Text style={{fontSize:20,color:'black'}}> {title} some text</Text>
  </View>
  )};

//{ renderItem(item)}

return (


<View style={{
             flex: 1,
             width: screenWidth,
         }}>

<TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{recipeItems.strMeal}</Text>
  </TouchableOpacity>
 <View style={{width:'90%',alignSelf:'center'}}>
<Image source={{
       uri: recipeItems.strMealThumb,
       cache: 'only-if-cached',
      }}
      style={{ width: '100%' ,height:250,marginBottom:10 }}
           />

<ScrollView contentContainerStyle={{width:'90%',alignSelf:'center',marginBottom:500} }>
	<Text style={{fontSize:20,fontFamily:'JosefinSans-SemiBold'}} >Cooking Instructions</Text>
<Text style={{fontSize:16,lineHeight:22,color:'black',whiteSpace: 'pre-wrap',marginBottom:500,fontFamily:'JosefinSans-Regular'}} >


{recipeItems.strInstructions}




</Text>
</ScrollView>
</View>

	</View>



	)






}

const styles = StyleSheet.create({
      container: {
    flex: 1,
    marginTop:  0,    
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