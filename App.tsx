import React, { useState,useEffect } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import LottieSplashScreen from "react-native-lottie-splash-screen";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import SearchScreen from './src/SearchScreen';
//import HistoryScreen from './src/HistoryScreen';
import HomeScreen from './src/HomeScreen';
import RecipeMealScreen from './src/RecipeMealScreen';
import RecipeMealDetail from './src/RecipeMealDetail';
import YoutubeSearch from './src/YoutubeSearch';
import PlayYoutubeVideo from './src/PlayYoutubeVideo';

import RecipeCategoryView from './src/RecipeCategoryView';


import LanguageTranslator from './src/LanguageTranslator';


import {Text, View} from 'react-native';

import {LogBox,Dimensions} from 'react-native';
import CustomDrawer from './src/CustomDrawer';
import { navigationRef } from './src/RootNavigation';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomStack = createBottomTabNavigator();

//Dimensions.get('window').width

function AppDrawerStack() {
    return (
        <Drawer.Navigator detachInactiveScreens={false} 
        initialRouteName={AppBottomStack}
        screenOptions={{
        drawerStyle: {
        backgroundColor: 'rgb(194 65 12)',
        width: '50%',
        },
            }}
        screenOptions={{headerShown: false}}     
        drawerContent={props => <CustomDrawer {...props} />}>

            <Drawer.Screen options={{headerShown: false}}  name='AppBottomStack' component={AppBottomStack} />

  <Drawer.Screen name="Search" component={HomeScreen} />
         <Drawer.Screen name="Meals"  component={RecipeMealScreen} />
         <Drawer.Screen name="MealDetail"  component={RecipeMealDetail} />
         <Drawer.Screen name="RecipeCategoryView"  component={RecipeCategoryView} />
          <Drawer.Screen name="LanguageTranslator"  component={LanguageTranslator} />


        </Drawer.Navigator>
    )


}




const RecipeStack = () => {
   
    return (
      <Stack.Navigator initialRouteName="RecipeCategoryView"  screenOptions={{headerStyle: {
      backgroundColor: 'rgb(194 65 12)'} ,headerTitleStyle: {
    color: 'white'
  },headerTintColor: 'white'
    }} >
         <Stack.Screen name="Search" component={HomeScreen} />
         <Stack.Screen name="Meals"  component={RecipeMealScreen} />
         <Stack.Screen name="MealDetail"  component={RecipeMealDetail} />
         <Stack.Screen name="RecipeCategoryView"  component={RecipeCategoryView} />
         
      </Stack.Navigator>
    )
}

const YoutubeStack = () => {
   
    return (
      <Stack.Navigator initialRouteName="YoutubeSearch"  screenOptions={{headerStyle: {
      backgroundColor: 'rgb(194 65 12)'} ,headerTitleStyle: {
    color: 'white'
  },headerTintColor: 'white'
    }}>
         <Stack.Screen name="YoutubeSearch" component={YoutubeSearch} />
         <Stack.Screen name="PlayYoutubeVideo" component={PlayYoutubeVideo} />

      </Stack.Navigator>
    )
}


//  options={{headerShown: false}}

// Bottom Stack Part
//

// screenOptions={{headerShown: false}}
//'rgb(154 52 18)'

/*

 options={{headerStyle: {
      backgroundColor: 'rgb(194 65 12)'
    },}} 

*/

function AppBottomStack() {
    return (
        <BottomStack.Navigator>
            
<BottomStack.Screen options={{
      tabBarLabel: 'Recipes',
      tabBarIcon: ({ color, size }) => (
        <IonIcon name="restaurant" color={color} size={size} />
      ),
      headerShown: false,
      headerStyle: {
      backgroundColor: 'rgb(194 65 12)'
    }
    }}
     name="Recipes" component={RecipeStack} />


            <BottomStack.Screen
               options={{
      tabBarLabel: 'Translate',
      tabBarIcon: ({ color, size }) => (
        <FaIcon name="language" color={color} size={size} />
      ),
      headerStyle: {
      backgroundColor: 'rgb(194 65 12)'} ,headerTitleStyle: {
    color: 'white'
  },headerTintColor: 'white'
    }}
     
              name='LanguageTranslator'
                component={LanguageTranslator}

            />
            <BottomStack.Screen
       options={{
      tabBarLabel: 'Youtube',
      tabBarIcon: ({ color, size }) => (
        <FaIcon name="youtube" color={color} size={size} />
      ),
      headerShown:false,
    }}
                name='SearchYoutube'
                component={YoutubeStack}
            />
            

        </BottomStack.Navigator>
    )
}



const App = () => {


  useEffect(() => {
    LottieSplashScreen.hide();
    LogBox.ignoreAllLogs();
  }, []);


//
//clicked? styles.pullHigher:'',, clicked?styles.bgTransparent:'']
//,clicked?styles.bgTransparent:''
// injectedJavaScript={}       setLoading(true);


const theme = {
  ...DefaultTheme,  
     colors
: {
    ...DefaultTheme.colors,    
    background: 'rgb(241 245 249)',
  },
  dark:true,
}



  return (


<NavigationContainer>
       <Drawer.Navigator detachInactiveScreens={false}  
       
        screenOptions={{
        drawerStyle: {
        backgroundColor: 'rgb(241 245 249)',
        width: Dimensions.get('window').width,
        },
            }}
        screenOptions={{headerShown: false}}     
        useLegacyImplementation={false} 
        drawerContent={props => <CustomDrawer {...props} />}>

            <Drawer.Screen name='AppBottomStack' component={AppBottomStack} />
            
        </Drawer.Navigator>
      </NavigationContainer>


  );
};

export default App;
