// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React, {useState,useEffect,useCallback} from 'react';
import {
  SafeAreaView,RefreshControl,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,FlatList,TouchableOpacity
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import * as RootNavigation from './RootNavigation.js';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";

//import {get_count_of_history_items_from_async_storage,getAsyncStoreData,remove_history_items_from_async_storage,get_history_items_from_async_storage} from 'utils/utils';

import AiLogo from './svgComponents/AiLogo';
import Bullet from './svgComponents/Bullet';

const CustomDrawer = ({ state, navigation, ...props}) => {

const isFocused = useIsFocused();

const [queryHistory,setQueryHistory] = useState(null);
const [refreshing, setRefreshing] = React.useState(false);

const [forcerefresh,setForceRefresh] = useState(false);

const [numItems,setNumItems] = useState(0);

const [loaded,setLoaded] = useState(false);
console.log('myprops',props);
console.log('nav',navigation);
console.log('state',state);

//let navigation = useNavigation();


/*
useEffect(() => {



async function fetchHistoryFromAsyncStore() {

 try {
    const jsonValue = await AsyncStorage.getItem('@XDashQueryHistory');
  //  console.log('async contains-->',jsonValue);
    let qrhis = jsonValue != null ? jsonValue : null;
    if (qrhis!==null) { setQueryHistory(JSON.parse(jsonValue));setLoaded(true);
      setNumItems(JSON.parse(jsonValue).length);
console.log('mylength',JSON.parse(jsonValue).length);

    }
  } catch(e) {
    // error reading value
    console.log('error reading from async storage',e);

  }


}

fetchHistoryFromAsyncStore();
//getCountHistoryItems();

}, [isFocused,refreshing,forcerefresh]);
*/
 
/*

async function clearStore() {
 try {
    await AsyncStorage.removeItem('@XDashQueryHistory');
   setForceRefresh(true);
   setQueryHistory(null);
   console.log('async s cleared');
  } catch (e) {
    // saving error
    console.log('error removing fromto async storage');
  }

}
*/

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';


  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'rgb(154 52 18)',color:'#fff'}}>
      {/*Top Large Image */}
     


      <DrawerContentScrollView {...props} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        } style={{color:'#fff'}}>
        

        <View style={{width:'99%'}}>




          
<Text style={{marginLeft:10,marginTop:10,fontSize:25,color:'#f5f5f5',fontFamily:'Quicksand-SemiBold',marginBottom:20}} >
  Menu Item Links</Text>

          
          
              <TouchableOpacity 
 onPress={()=>{navigation.navigate('AppBottomStack', { screen: 'Recipes' ,params:{screen:'RecipeCategoryView'} });}} 
                style={{backgroundColor:'rgb(124 45 18)',marginLeft:10,marginBottom:15,
                alignItems:'center',justifyContent:'center',width:180,height:45,borderWidth:1,borderColor:'#5f5f5',borderRadius:10 }} >
                
                <Text style={{fontSize:18,lineHeight:30,color:'white',fontFamily:'Quicksand-SemiBold'}}>
                  Recipe Categories</Text>
              </TouchableOpacity>
          

              <TouchableOpacity 
 onPress={()=>{navigation.navigate('AppBottomStack', { screen: 'Recipes' ,params:{screen:'Search'} });}} 
                style={{backgroundColor:'rgb(124 45 18)',marginLeft:10,marginBottom:15,
                alignItems:'center',justifyContent:'center',width:180,height:45,borderWidth:1,borderColor:'#5f5f5',borderRadius:10}} >
                
                <Text style={{fontSize:18,lineHeight:30,color:'white',fontFamily:'Quicksand-SemiBold'}}>
                  Recipe Search</Text>
              </TouchableOpacity>

              <TouchableOpacity 
 onPress={()=>{navigation.navigate('AppBottomStack', { screen: 'LanguageTranslator' });}} 
                style={{backgroundColor:'rgb(124 45 18)',marginLeft:10,marginBottom:15,
                alignItems:'center',justifyContent:'center',width:250,height:45,borderWidth:1,borderColor:'#5f5f5',borderRadius:10}} >
                
                <Text style={{fontSize:18,lineHeight:30,color:'white',fontFamily:'Quicksand-SemiBold'}}>
                  Language Translator</Text>
              </TouchableOpacity>

<TouchableOpacity 
 onPress={()=>{navigation.navigate('AppBottomStack', { screen: 'SearchYoutube' });}} 
                style={{backgroundColor:'rgb(124 45 18)',marginLeft:10,marginBottom:5,
                alignItems:'center',justifyContent:'center',width:180,height:45,borderWidth:1,borderColor:'#5f5f5',borderRadius:10}} >
                
                <Text style={{fontSize:18,lineHeight:30,color:'white',fontFamily:'Quicksand-SemiBold'}}>
                  Youtube Search</Text>
              </TouchableOpacity>
          
        </View>




      </DrawerContentScrollView>
      

      <Text
        onPress={() => setLoaded(!loaded)}
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'white'
        }}>
        https://sanjeevdg.github.io/
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomDrawer;
