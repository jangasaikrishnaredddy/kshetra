import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const MyImageComponent = () => {
  const navigation = useNavigation();

  const handleImageClick = () => {
    navigation.navigate('SplashScreen'); // replace 'NewPage' with the name of the page you want to navigate to
  };

  return (
    <View>
       <TouchableOpacity onPress={handleImageClick}>
       <Image source={require("../assets/logo.png")} />
       </TouchableOpacity>
 
    </View>
   

    // </TouchableOpacity>
  );
};

export default MyImageComponent;