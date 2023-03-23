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

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createMaterialTopTabNavigator();

const Header = ({ navigation }) => {
  const [tabactive, setTabactive] = useState({
    first: true,
    second: false,
    third: false,
  });
  return (
    <NativeBaseProvider>
    <View>
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.col1} onPress={() => navigation.navigate('SplashScreen')}>
            <Button onPress={() => navigation.navigate('SplashScreen')}>

            <HamburgerIcon size="xl" color="#ffffff" />
            </Button>
           
          </View>
          <View style={styles.col2}>
          
            <Center>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/logo.png")}
              />
             
            </Center>
           
          </View>
          <View style={styles.col1}></View>
        </View>
        <View style={styles.padding}>
          <Input
            placeholder="Search By Name, Loction & Places"
            width="100%"
            borderRadius="100"
            borderColor="#ffffff"
            backgroundColor="#ffffff"
            py="3"
            px="1"
            fontSize="14"
            InputLeftElement={
              <Icon
                m="2"
                ml="3"
                size="6"
                color="gray.400"
                as={<MaterialIcons name="search" />}
              />
            }
          />
        </View>
        <View
          style={{
            ...styles.row,
            ...{ justifyContent: "space-between", paddingTop: 20 },
          }}
        >
          <View>
            {/* <HamburgerIcon size='xl' color='#ffffff' /> */}
            <Pressable>
              <Button
                onPress={() => {
                  setTabactive({ first: true, second: false, third: false });
                }}
                style={{
                  ...{ backgroundColor:  tabactive.first?'#ffffff': "#FFEEB1" },
                  ...styles.tabsBorderRadius,
                }}
              >
                <Text>All</Text>
              </Button>
            </Pressable>
          </View>
          <View>
            <Pressable>
              <Button
                onPress={() => {
                  setTabactive({ first: false, second: true, third: false });
                }}
                style={{
                  ...{ backgroundColor:  tabactive.second?'#ffffff':"#FFEEB1" },
                  ...styles.tabsBorderRadius,
                }}
              >
                <Text>Residental</Text>
              </Button>
            </Pressable>
          </View>
          <View>
            <Pressable>
              <Button
                onPress={() => {
                  setTabactive({ first: false, second: false, third: true });
                }}
                style={{
                  ...{ backgroundColor: tabactive.third?'#ffffff': "#FFEEB1" },
                  ...styles.tabsBorderRadius,
                }}
              >
                <Text>Commeriacal</Text>
              </Button>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{paddingLeft: 26,
    paddingRight: 26,}}>
      {(tabactive.first)?<>All</>:null}
      {(tabactive.second)?<>Residental</>:null}
      {(tabactive.third)?<>Commeriacal</>:null}
      </View>
    </View>
    </NativeBaseProvider>
   
  );
};

Header.defaultProps = {
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
    backgroundColor: "#390000",
    //justifyContent: "center",
    // alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
});

export default Header;
