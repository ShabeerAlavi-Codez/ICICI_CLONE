import React, { useEffect,useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ImageBackground,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import AuthImg from '../assets/Images/authImg.png';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { Input} from '@rneui/themed';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const wd = width, oval2Width = width * 0.7;
const ht = height;
type AuthPageComponentProps = {};
const AuthPage: React.FunctionComponent<AuthPageComponentProps> = () => {
  const [pinValue,setPinValue]= useState('');

  // const setPinValue= (value)=>{
  //   console.log(value);
  // }

  return (
    // <Text style={styles.titleText}>WELCOME TO FIRST PAGE</Text>
    <>
      <View style={styles.container}>
        <View style={styles.oval1}>
          <ImageBackground source={AuthImg} resizeMode='cover' style={styles.authHead}>
            <View style={{ flexDirection: 'row' }}>
              <Image style={styles.logo1} source={require('../assets/Images/ici_white_font.png')} />
              <Text style={styles.appVer}>App Ver 16.2</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 28, flex: 1, left: 10, top: 0.03, fontWeight: '800' }}>Hi Johnny J Demo</Text>
            </View>
            <View style={{ flexDirection: 'row' ,top:15}}>
              <Icon2 name={'finger-print'} size={30} color={'#7c7974'} style={{left:wd*0.18,}} />
              <Text style={{ fontSize: 22, flex: 1, left:  wd*0.3,  fontWeight: '400', color:"#7c7974" }}>Unlock with fingerprint</Text>
            </View>
            <View style={{ flexDirection: 'row' , top: 10,}}>
              <Text style={{ fontSize: 22, flex: 1, justifyContent:"center",left: wd*0.5, fontWeight: '400', color:"#7c7974" }}>or</Text>
            </View>
            <View style={{ flexDirection: 'row' , top: 10,}}>
              <Text style={{ fontSize: 27, flex: 1, justifyContent:"center",left:  wd*0.2, fontWeight: '800', color:"#7c7974" }}>Enter 4  Digit Login PIN</Text>
            </View>
            <View style={{ flexDirection: 'row',top:13 ,left:wd*0.25, width:200,borderBottomColor: '#a59b99', borderBottomWidth: 1,}}>
            <TextInput
        editable
        maxLength={4}
        onChangeText={pinValue => setPinValue(pinValue)}
        keyboardType='number-pad'
        value={pinValue}
        style={{padding: 8, fontSize:30,paddingLeft: 30,paddingRight: 25,}}
      />

            </View>
            <View style={{ flexDirection: 'row' ,top:8 }}>
              <Text style={{ fontSize: 15, flex: 1, justifyContent:"center",left:  wd*0.45, top:10 , fontWeight: '300', color:"#7c7974" }}>Forgot PIN?</Text>
            </View>
          </ImageBackground>
        </View>

        {/* product small card section */}
        <View style={{ flexDirection: 'column', top: ht*0.115 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 12, alignItems: 'center', }} >
            <Text style={{ fontSize: 20, fontWeight: "bold",  color: "#000000" }}>Product at your fingertips</Text>
          </View>
          {/* First card button row */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 12, alignItems: 'center', }}>


            <TouchableOpacity
              style={styles.btnCrd1}
              onPress={() => console.log("1")}
              underlayColor='#fff'>
              <Icon1 name={'contacts'} size={65} color={'#000'} style={styles.styleIcon} />
              <Text style={styles.btnCrdTxt}>Pay to Mobile No.</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnCrd2}
              onPress={() => console.log("1")}
              underlayColor='#fff'>
              <Image style={styles.styleImgIcon} source={require('../assets/Images/apply-gry-rg.png')} />
              <Text style={styles.btnCrdTxt}> Payment Request</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnCrd3}
              onPress={() => console.log("1")}
              underlayColor='#fff'>
              <Icon1 name={'customerservice'} size={60} color={'#000'} style={styles.styleIcon} />
              <Text style={styles.btnCrdTxt}> Call Us</Text>
            </TouchableOpacity>
          </View>
          {/* second card button row */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 20, alignItems: 'center', }}>


            <TouchableOpacity
              style={styles.btnCrd1}
              onPress={() => console.log("1")}
              underlayColor='#fff'>
             <Image style={styles.styleImgIcon} source={require('../assets/Images/insta_serv.png')} />
              <Text style={styles.btnCrdTxt}>Insta Banking</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnCrd2}
              onPress={() => console.log("1")}
              underlayColor='#fff'>
              <Image style={styles.styleImgIcon} source={require('../assets/Images/coupon.png')} />
              <Text style={styles.btnCrdTxt}> Offers </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnCrd3}
              onPress={() => console.log("1")}
              underlayColor='#fff'>
              <Icon2 name={'bulb-outline'} size={60} color={'#000'} style={styles.styleIcon} />
              <Text style={styles.btnCrdTxt}> More services</Text>
            </TouchableOpacity>
          </View>

          {/* carousel card */}
          <View style={{ top: ht * 0.05 }}>
            <Image source={require('../assets/Images/card_bg1.png')} style={styles.carouselCard} />
          </View>


        </View>



      </View>
      
      <View style={{ justifyContent: 'flex-end', flexDirection: "row-reverse" ,backgroundColor:"#ffffff"}}>

        <TouchableOpacity
          style={styles.btnBtm1}
          onPress={() => console.log("5")}
          underlayColor='#fff'>
          <Image style={styles.btmImgIcon} source={require('../assets/Images/btn_btm_5.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnBtm2}
          onPress={() => console.log("4")}
          underlayColor='#fff'>
          <Image style={styles.btmImgIcon} source={require('../assets/Images/btn_btm_4.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnBtm3}
          onPress={() => console.log("3")}
          underlayColor='#fff'>
            <Image style={styles.btmImgIcon} source={require('../assets/Images/btn_btm_3.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnBtm4}
          onPress={() => console.log("2")}
          underlayColor='#fff'>
          <Image style={styles.btmImgIcon} source={require('../assets/Images/btn_btm_2.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnBtm5}
          onPress={() => console.log("1")}
          underlayColor='#fff'>
          <Image style={styles.btmImgIcon} source={require('../assets/Images/btn_btm_1.png')} />
        </TouchableOpacity>
        
      </View>
    </>


  );
};

const styles = StyleSheet.create({
  viewStyle: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  titleText: { fontSize: 20, fontWeight: 'bold', color: 'black' },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 2,
    backgroundColor: '#ecf0f1',
    padding: 4,
  },
  authHead: {
    position: 'absolute',
    width: wd,
    height: height * 0.32,
    top: 0,
    bottom: 10,
    zIndex: 3,
    transform: [
      { scaleX: 1 }
    ]
  },
  oval1: {
    position: 'absolute',
    width: wd,
     height: height * 0.32,
    // backgroundColor: 'red',
    top: 0,
    bottom: 25,
    flex: 1,
    flexDirection: 'column',
    zIndex: 3,
    transform: [
      { scaleX: 1 }
    ]
  },
  logo1: {
    // backgroundColor: 'rgba(0,0,0,0)',
    left: 10,
    top: 3,
    width: 100,
    height: 30

  },
  appVer: {
    top: 3,
    fontSize: 16,
    right: 15,
    textAlign: 'right',// alingn to right
    flex: 1
  },
  logo: {
    // backgroundColor: 'rgba(0,0,0,0)',
    width: 160,
    height: 52
  },
 
  btnCrd1: {
    width: wd * 0.28,
    height: ht * 0.15,
    left: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    alignContent: "center",
    alignItems: "center",
    borderRadius: 15,
    // color:"#dee1e6",
    backgroundColor: '#dee1e6',
    color: "#000",
  },
  btnCrd2: {
    width: wd * 0.27,
    height: ht * 0.15,
    // left: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    alignContent: "center",
    alignItems: "center",
    borderRadius: 15,
    // color:"#dee1e6",
    backgroundColor: '#dee1e6',
    color: "#000",
  },
  btnCrd3: {
    width: wd * 0.28,
    height: ht * 0.15,
    // left: 5,
    right: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    alignContent: "center",
    alignItems: "center",
    borderRadius: 15,
    // color:"#dee1e6",
    backgroundColor: '#dee1e6',
    color: "#000",

  },
  btnCrdTxt: {
    color: '#6e6e70',
    textAlign: 'center',
    top: 76

  },
  styleIcon: {
    position: 'absolute',
    textAlign: 'center',
    top: 13,
    // left: 43
  },
  styleImgIcon: {
    position: 'absolute',
    alignItems: 'center',
    width: wd * 0.19,
    height: ht * 0.095,
    top: 13,

  },
  carouselCard: {
    width: wd * 0.99,
    resizeMode: 'contain',
    padding: 5,
    borderBottomLeftRadius:20,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopRightRadius:20,
    // height: ht * 0.15,
  },
  btnBtm1: {
    width: wd * 0.15,
    height: ht * 0.08,
    left: -90,
    // right: 5,
  },
  btnBtm2: {
    width: wd * 0.15,
    height: ht * 0.08,
    left: -65,
    right:10,
    // right: 5,
  },
  btnBtm3: {
    width: wd * 0.15,
    height: ht * 0.08,
    left: -45,
    // right: 5,
  },
  btnBtm4: {
    width: wd * 0.15,
    height: ht * 0.08,
    left: -25,
    // right: 5,
  },
  btnBtm5: {
    width: wd * 0.15,
    height: ht * 0.08,
    left: -10,
    
  },
  btmImgIcon:{
    bottom:3
  }
});

export default AuthPage;
