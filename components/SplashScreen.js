import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  NativeBaseProvider,
  Text,
  Center,
  Box,
  Divider,
  Heading,
  HamburgerIcon,
  Link,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Animated, color } from "react-native-reanimated";



const Tab = createMaterialTopTabNavigator();

 
  const SplashScreen = (navigation) => {
  const [tabactive, setTabactive] = useState({
    first: true,
    second: false,
    third: false,
  });
  return (
    <View style={{backgroundColor:'black'}}>
      <View style={styles.header}>
        <View style={styles.row}>

        
        <text>Hey I amthere!</text>
        
        
        
        
        
        
        
        </View>
      </View> 
    </View>
   
  );
};

SplashScreen.defaultProps = {
  title: "Shopping List",
};

const styles = StyleSheet.create({
  tabsBorderRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  col1: { flex: 1, justifyContent: "Center" },
  col2: { flex: 4 },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  padding: {
    paddingTop: 10,
  },
  tinyLogo: {
    padding: 10,
    // paddingTop:10,
    width: 78,
    height: 48,
  },
  header: {
    // height:214,
    //   padding: 10,
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 34,
    backgroundColor: "#11111",
    //justifyContent: "center",
    // alignItems: "center",
  },
  // text: {
  //   color: "#fff",
  //   fontSize: 24,
  //   textAlign: "center",
  // },
});

export default SplashScreen;
