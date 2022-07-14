import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import { useState } from 'react';
import taro_data from './data/taro';
import { useEffect } from 'react';
import YoutubeEmbed from './components/youtube-embed';
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {

  const [index, setIndex] = useState(0);
  const [view, setView] = useState();

  const KEY = '@index';

  async function storeIndex() {
    try {
      await AsyncStorage.setItem(
        KEY,
        index
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function retrieveIndex() {
    try {
      const value = await AsyncStorage.getItem(KEY);
      if (value !== null) {
        setIndex(value);
      } else {
        setIndex(0);
      }
    } catch (error) {
      console.log(error);
      setIndex(0);
    }
  }

  useEffect(() => {
    retrieveIndex();
  }, []);

  useEffect(() => {
    if (index !== null) {
      storeIndex(index);
      setView(<YoutubeEmbed key={index} index={index} />);
    }
  }, [index]);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, padding: 10, color: 'white'}}>Let's do the Taro Challenge!</Text>
      {view}
      <View style={styles.control}>
        <Button 
          style={styles.ui}
          onPress={() => {
            let i = index;
            if (i > 0) {
              i--;
              setIndex(i);
            }
          }}
          title="Back"
          color="#fb8500"
        />

        <Text style={styles.ui}>{index} / {taro_data.length}</Text>
        
        <Button 
          style={styles.ui}
          onPress={() => {
            let i = index;
            if (i <  taro_data.length) {
              i++;
              setIndex(i);
            }
          }}
          title="Next"
          color="#fb8500"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#023047',
    alignItems: 'center',
    justifyContent: 'center',
  },
  control: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  ui: {
    padding: 10,
    color: 'white',
    fontWeight: 'bold'
  }

});
