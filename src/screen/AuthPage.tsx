import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AuthImg from '../assets/Images/authImg.png';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const oval1Width = width , oval2Width = width * 0.7;
type AuthPageComponentProps = {};
const AuthPage: React.FunctionComponent<AuthPageComponentProps> = () => {

  return (
    // <Text style={styles.titleText}>WELCOME TO FIRST PAGE</Text>
    <View style={styles.container}>
      <View style={styles.oval1}>
        <Image source={AuthImg}/>
      </View>
    </View>
    
    
    // <View style={styles.viewStyle}>
    //     <View style={styles.ovalBgH}>
    //         <View style={styles.ovalBg}>
    //         </View>
    //     </View>
    //     <Text style={styles.titleText}>WELCOME TO FIRST PAGE</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  titleText: {fontSize: 20,fontWeight: 'bold',color:'black'},
  ovalBgH:{
    flex:2,
    overflow: 'hidden', 
    width : 50, 
    height:50, 
    position : 'absolute', 
    borderBottomEndRadius:50,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
    top:0,
    backgroundColor:'transparent',
    transform: [
    {scaleX: 10}
    ]
},
ovalBg:{
    backgroundColor: '#a0c580',
    width : 50, height:300,
    transform: [
    {scaleX: 10}
    ]
},
container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop:2,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  authHead: {
    position: 'absolute',
    width: width,
    height: height*0.42,
    top: 0,
zIndex: 3,
transform: [
    {scaleX: 1}
    ]
  },
  oval1: {
    position: 'absolute',
    width: oval1Width,
    height: height*0.42,
    // backgroundColor: 'red',
    top:0,
    // borderBottomEndRadius:50,
    // borderBottomLeftRadius:50,
    // borderBottomRightRadius:50,
zIndex: 3,
transform: [
    {scaleX: 1}
    ]
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 16,
    width: 350,
  },
  oval2: {
     position: 'absolute',
    width: oval2Width,
    height: oval2Width,
    borderRadius: oval2Width / 2,
    backgroundColor: 'blue',
    top: -oval2Width / 2.5,
    right: -10,
    zIndex:2
  },
});

export default AuthPage;
