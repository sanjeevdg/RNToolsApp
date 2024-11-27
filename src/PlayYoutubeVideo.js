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

import { WebView } from 'react-native-webview';

import YoutubePlayer from "react-native-youtube-iframe";
// import YouTube from 'react-native-youtube';

// import { YouTubeStandaloneAndroid } from 'react-native-youtube';

export default function PlayYoutubeVideo({ route, navigation}) {

 const dimensions = Dimensions.get('window');
    const screenWidth = dimensions.width;

/*
const [isReady,setIsReady] = useState(false);
const [status, setStatus] = useState('');
const [quality,setQuality] = useState('');
const [error,setError] = useState('');
*/


const myitem = route.params.myitem;

console.log('myidmeal==',myitem);

/*

alignSelf:'center',alignItems:'center',justifyContent:'center',height:50,width:180,backgroundColor:'teal',borderRadius:20



useEffect(() => {

function playMyVid() {

YouTubeStandaloneAndroid.playVideo({
  apiKey: 'AIzaSyB3s19ENkhzWVF_ulMvrHRgW4zd73TKZNA', // Your YouTube Developer API Key
  videoId: 'videoid', // YouTube video ID
  autoplay: true, // Autoplay the video
  startTime: 1, // Starting point of video (in seconds)
})
  .then(() => console.log('Standalone Player Exited'))
  .catch(errorMessage => console.error(errorMessage));


}


playMyVid();


}, [videoid]);


<YouTube
  videoId={videoid} 
  apiKey={'AIzaSyB3s19ENkhzWVF_ulMvrHRgW4zd73TKZNA'}   // The YouTube video ID
  play={true}             // control playback of video with true/false
  fullscreen={false}       // control whether the video should play in fullscreen or inline
  loop={false}             // control whether the video should loop when ended
  onReady={e =>{ setIsReady(true);console.log('redy is true');}}
  onChangeState={e => setStatus(e.state) }
  onChangeQuality={e => setQuality(e.quality)}
  onError={e => {setError(e.error);console.log('err-->',e);} }
  style={{ alignSelf: 'stretch', height: 300 }}
/>


npm i react-native-youtube-iframe

<WebView
        style={{flex:1}}
        javaScriptEnabled={true}
        source={{uri: `https://www.youtube.com/embed/`+ videoid +`?rel=0&autoplay=0&showinfo=0&controls=1`}}
/>


*/

const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);



return (


<View style={{
             flex: 1,
             width: screenWidth,
         }}>

    <Text style={styles.title}>{myitem.snippet.title} </Text>

 <View style={{flex:1,width:'100%',alignSelf:'stretch'}}>


<YoutubePlayer
        height={350}
        play={playing}
        videoId={myitem.id.videoId}
        onChangeState={onStateChange}
      />

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
    lineHeight:40,
    fontFamily:'JosefinSans-Regular',
    color:'black',
    marginBottom:15,
    marginTop:15
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