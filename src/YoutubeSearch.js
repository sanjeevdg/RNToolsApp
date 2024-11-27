import React, { useState,useEffect } from 'react';

import {StyleSheet,TextInput,SafeAreaView,TouchableOpacity,FlatList, ScrollView,Text,View} from 'react-native';

import {Input,Image} from 'react-native-elements';

import FaIcon from 'react-native-vector-icons/FontAwesome';




/*
items
items.id.videoId
items.snippet.title
items.snippet.description
items.snippet.thumbnails.medium.url
items.snippet.thumbnails.medium.width
items.snippet.thumbnails.medium.height
*/



const YoutubeSearch = ({ navigation,route }) => { 
  
const [searchTerm, setSearchTerm]   = useState();

const [youtubeItems,setYoutubeItems ] = useState();



const searchYoutube = async () => {





console.log('one')
//www.themealdb.com/api/json/v1/1/search.php?s=
//https://tasty.p.rapidapi.com/recipes/list?from=0&size=1&q=
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=`+encodeURIComponent(searchTerm)+`&type=video&key=AIzaSyB3s19ENkhzWVF_ulMvrHRgW4zd73TKZNA` ;
       
        try { 
            const response = await fetch(url);
            const result = await response.json();
         //   const responseObject = JSON.parse(result);
            console.log('responseObject==>',result.items);
            setYoutubeItems(result.items);
        } catch (error) {
            console.log(error);
            alert("Please Try Again! Some Error Occurred at your side");
        }

}
/*
items
items.id.videoId
items.snippet.title
items.snippet.description
items.snippet.thumbnails.medium.url
items.snippet.thumbnails.medium.width
items.snippet.thumbnails.medium.height
*/
function renderItem(item) {
    
//console.log('MYITEM-->',item);

    return (

<View style={{display:'flex' ,marginBottom:15,width:'100%',alignSelf:'center'}} >
  <Text style={{fontSize:20,lineHeight:25,color:'black',fontFamily:'JosefinSans-Regular'}} >{item.snippet.title} </Text>
<Image source={{
       uri: item.snippet?.thumbnails?.medium?.url,
       cache: 'only-if-cached',
      }}
      onPress={()=>navigation.navigate('PlayYoutubeVideo',{myitem:item} )}
      style={{ width: '100%' ,height:250 }}
           />
<Text style={{fontSize:14,lineHeight:19,color:'black',fontFamily:'JosefinSans-Regular'}} >
  {item.snippet?.description}
</Text>




           </View>

    );
  };


//alignSelf:'center',alignItems:'center',justifyContent:'center',height:50,width:180,backgroundColor:'teal',borderRadius:20
  
  return (





 
 <SafeAreaView style={styles.container}>


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


<TouchableOpacity onPress={searchYoutube}
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


        <FlatList
          data={youtubeItems}
          renderItem={ ({item})  => renderItem(item)}
          keyExtractor={item => item.etag.toString()}
          extraData={item => item.etag.toString()}
        />






      </SafeAreaView>

    



);
      }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});      
export default YoutubeSearch;
