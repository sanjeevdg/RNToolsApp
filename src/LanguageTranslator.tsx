import React, { useState,useEffect } from 'react';
import { View, 
        Text, TouchableOpacity, StyleSheet ,Dimensions} from 'react-native';
import { Input } from 'react-native-elements';



import ModalDropdown from 'react-native-modal-dropdown';
import { styles } from "./Style";
import Tts from 'react-native-tts';

import FaIcon from 'react-native-vector-icons/FontAwesome';


const languages = {
    "am-ET": "Amharic",
    "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    "bem-ZM": "Bemba",
    "bi-VU": "Bislama",
    "bjs-BB": "Bajan",
    "bn-IN": "Bengali",
    "bo-CN": "Tibetan",
    "br-FR": "Breton",
    "bs-BA": "Bosnian",
    "ca-ES": "Catalan",
    "cop-EG": "Coptic",
    "cs-CZ": "Czech",
    "cy-GB": "Welsh",
    "da-DK": "Danish",
    "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "en-GB": "English",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fn-FNG": "Fanagalo",
    "fo-FO": "Faroese",
    "fr-FR": "French",
    "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    "ha-NE": "Hausa",
    "he-IL": "Hebrew",
    "hi-IN": "Hindi",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "kk-KZ": "Kazakh",
    "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    "ku-TR": "Kurdish",
    "ky-KG": "Kyrgyz",
    "la-VA": "Latin",
    "lo-LA": "Lao",
    "lv-LV": "Latvian",
    "men-SL": "Mende",
    "mg-MG": "Malagasy",
    "mi-NZ": "Maori",
    "ms-MY": "Malay",
    "mt-MT": "Maltese",
    "my-MM": "Burmese",
    "ne-NP": "Nepali",
    "niu-NU": "Niuean",
    "nl-NL": "Dutch",
    "no-NO": "Norwegian",
    "ny-MW": "Nyanja",
    "ur-PK": "Pakistani",
    "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    "ps-PK": "Pashto",
    "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sg-CF": "Sango",
    "si-LK": "Sinhala",
    "sk-SK": "Slovak",
    "sm-WS": "Samoan",
    "sn-ZW": "Shona",
    "so-SO": "Somali",
    "sq-AL": "Albanian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "sw-SZ": "Swahili",
    "ta-LK": "Tamil",
    "te-IN": "Telugu",
    "tet-TL": "Tetum",
    "tg-TJ": "Tajik",
    "th-TH": "Thai",
    "ti-TI": "Tigrinya",
    "tk-TM": "Turkmen",
    "tl-PH": "Tagalog",
    "tn-BW": "Tswana",
    "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    "uz-UZ": "Uzbek",
    "vi-VN": "Vietnamese",
    "wo-SN": "Wolof",
    "xh-ZA": "Xhosa",
    "yi-YD": "Yiddish",
    "zu-ZA": "Zulu"
};

export default function LanguageTranslator() {


 const dimensions = Dimensions.get('window');
    const screenWidth = dimensions.width;
    const screenHeight = dimensions.height;

    const [fromText, setFromText] = useState('');
    const [toText, setToText] = useState('');
    const [fromLanguage, setFromLanguage] = 
        useState('en-GB');
    const [toLanguage, setToLanguage] = 
        useState('fa-IR');





    const translate = () => {
        if (!fromText) {
            setToText('');
            return;
        }

        setToText('Translating...');

        const apiUrl = 
`https://api.mymemory.translated.net/get?q=
    ${fromText}&langpair=${fromLanguage}|${toLanguage}`;

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setToText(data.responseData.translatedText);
                data.matches.forEach((data) => {
                    if (data.id === 0) {
                        setToText(data.translation);
                    }
                });
            });
    };


    const exchangeLanguages = () => {
        const tempText = fromText;
        const tempLang = fromLanguage;

        setFromText(toText);
        setToText(tempText);
        setFromLanguage(toLanguage);
        setToLanguage(tempLang);
    };


const playAudio = async () => {

Tts.getInitStatus().then(() => {
  Tts.speak(toText);
});



}

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Input
                    placeholder="Enter text"
                    value={fromText}
                    textAlignVertical={'top'}
                    onChangeText={(text) => 
                        setFromText(text)}
                    inputContainerStyle=
                        {{height:null}}
                    multiline={true} 
                    // Allow multiline input
                    numberOfLines={4} 
                    containerStyle={{ height: null }}
                    inputStyle={{height:null}}
                    // Limit the number of lines shown (adjust as needed)
                />
                <View style={styles.controls}>
                    <ModalDropdown
                        options={Object.values(languages)}
                        defaultValue={languages[fromLanguage]}
                        isFullWidth={true}
                        onSelect={(index, value) => {
                            setFromLanguage(Object.keys(languages).find(key => 
                                languages[key] === value));
                        }}
                        style={styles.picker}
                    />
                    <TouchableOpacity style={styles.exchangeButton} 
                        onPress={exchangeLanguages}>
                        <Text style={styles.exchangeButtonText}>↔</Text>
                    </TouchableOpacity>
                    <ModalDropdown
                        options={Object.values(languages)}
                        defaultValue={languages[toLanguage]}
                        isFullWidth={true}
                        onSelect={(index, value) => {
                            setToLanguage(Object.keys(languages)
                                .find(key => languages[key] === value));
                        }}
                        style={styles.picker}
                    />
                </View>
                <Input
                    placeholder="Translation"
                    value={toText}
                    inputContainerStyle=
                        {styles.translationTextContainer}
                    disabled
                    multiline={true} 
                    
                    // Allow multiline input for translation text
                    numberOfLines={4} 
                    
                    // Limit the number of lines shown (adjust as needed)
                />
                <TouchableOpacity style={[ styles.button,{ marginBottom:2}]} onPress={translate}>
                    <Text style={styles.buttonText}>Translate it</Text>
                </TouchableOpacity>

                    <TouchableOpacity style={[ styles.button,{flexDirection:'row'} ]} onPress={playAudio}>
                    <Text style={styles.buttonText}>Play audio   </Text>
                    <FaIcon name="play" color={'white'} size={25} />
                    
                </TouchableOpacity>                




            </View>
        </View>
    );
}


