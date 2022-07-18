import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import taro_data from "../data/taro";

export default function YoutubeEmbed(props) {
  const index = props.index + 1;
  let id = "";
  for (let i = 0; i < taro_data.length; i++) {
    if (index == taro_data[i].index) {
      id = taro_data[i].id;
    }
  }

  return (
    <View>
      <YoutubeIframe height={720} width={1080} play={true} videoId={id} />
    </View>
  );
}
