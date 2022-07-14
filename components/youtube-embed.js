import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import taro_data from '../data/taro';

export default function YoutubeEmbed(props) {
    console.log(taro_data[props.index]["id"]);
    
    return (
        <View>
            <YoutubeIframe 
                height={720}
                width={1080}
                play={true}
                videoId={taro_data[props.index]["id"]}
            />
        </View>
    );
}