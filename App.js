import React, { useEffect, useState } from 'react';
import { ImageBackground, PermissionsAndroid, View, Image, TouchableOpacity, Text } from 'react-native';
import Torch from 'react-native-torch';
import On_image from './src/images/torchOn.png';
import Off_image from './src/images/torchOff.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import level_bg from './src/images/battery_bg.png';
const App = () => {

  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)

  const [isTorchON, setTorchON] = useState(false);
  const [level, setLevel] = useState('');

  const handleOnOff = () => {
    Torch.switchState(!isTorchON);
    setTorchON(!isTorchON);
  }


  deviceInfoModule.getBatteryLevel().then(batteryLevel => {
    setLevel(Math.round(batteryLevel * 100));
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
      <ImageBackground source={level_bg} style={styles.image}>
        <Text style={styles.level_title}>Battery {level}%</Text>
      </ImageBackground>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
        {
          isTorchON ? <Image
            style={{ width: 125, height: 125, resizeMode: 'contain' }}

            source={On_image}
          /> : <Image
            style={{ width: 125, height: 125, resizeMode: 'contain' }}

            source={Off_image}
          />
        }


      </View>
      <View style={{ marginVertical: 10 }}>
        <TouchableOpacity style={styles.button} onPress={() => handleOnOff()}><Text style={{ textAlign: 'center', color: 'white' }}>{isTorchON ? 'OFF' : 'ON'}</Text></TouchableOpacity>
      </View>
      <View>
        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20 }}>TORCH LIGHT</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
        <Icon style={styles.icon}
          name='facebook-f'
          color='#fff' />
        <Icon style={styles.icon}
          name='youtube-play'
          color='#fff' />
        <Icon style={styles.icon}
          name='twitter'
          color='#fff' />
        <Icon style={styles.icon}
          name='linkedin'
          color='#fff' />
      </View>
      <View>
        <Text style={styles.icon_text}>Connect with us</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    marginTop: 20,
    marginLeft: 140,
    resizeMode: "cover",

  },
  level_title: {
    textAlign: 'center',
    fontSize: 10,
    marginTop: 20,
    paddingBottom: 20
  },
  button: {
    marginTop: 20,
    marginLeft: 70,
    marginRight: 70,
    backgroundColor: 'steelblue',
    padding: 10,
    borderRadius: 25
  },
  icon: {
    marginLeft: 20,
    width: 43,
    height: 43,
    fontSize: 15,
    backgroundColor: 'steelblue',
    padding: 15,
    borderRadius: 25,
    textAlign: 'center'
  },
  icon_text: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20
  }
});
export default App;

