import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import taro_data from "../data/taro";
import kiyo_data from "../data/kiyo";

export default function YoutubeEmbed(props) {
  const index = props.index + 1;
  let id = "";
  for (let i = 0; i < kiyo_data.length; i++) {
    if (index == kiyo_data[i].index) {
      id = kiyo_data[i].id;
    }
  }

  return (
    <View>
      <YoutubeIframe height={720} width={1080} play={true} videoId={id} />
    </View>
  );
}
