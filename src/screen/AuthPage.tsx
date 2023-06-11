import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  Button,
  ImageBackground,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AuthImg from '../assets/Images/authImg.png';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const wd = width, oval2Width = width * 0.7;
const ht = height;
type AuthPageComponentProps = {};
const AuthPage: React.FunctionComponent<AuthPageComponentProps> = () => {

  return (
    // <Text style={styles.titleText}>WELCOME TO FIRST PAGE</Text>
    <View style={styles.container}>
      <View style={styles.oval1}>
        <ImageBackground source={AuthImg} resizeMode='cover' style={styles.authHead}>
          <View style={{ flexDirection: 'row' }}>
          <Image style={styles.logo1} source={require('../assets/Images/ici_white_font.png')} />
            <Text style={styles.appVer}>App Ver 16.2</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 32, flex: 1, left: 10, top: 20, fontWeight: '800' }}>Hi Johnny J</Text>
          </View>
        </ImageBackground>
        {/* <View style = {styles.overlay}>
            <Text style = {styles.headline}>It should appear in front of the Background Image</Text>
            <Image style = {styles.logo} source = {require('../assets/Images/icici_icon.png')} />
           </View> */}
      </View>

      {/* product small card section */}
      <View style={{ flexDirection: 'column' }}>
        
        {/* <View style={{ flexDirection: 'row' }}>
          <Button title="Pay to Mobile No." color="#0000ff" />
          <Button title="Payment Requests" color="#0000ff" />
          <Button title="Call Us" color="#0000ff" />
        </View> */}
        {/* second row */}
        {/* <View style={{ flexDirection: 'row' }}>
          <Button title="Insta Banking" color="#0000ff" />
          <Button title="Others" color="#0000ff" />
          <Button title="More Services" color="#0000ff" />
        </View> */}

        {/* <View style={{ flexDirection: 'row' }}>
          <Button style={styles.btnCrd1} title="Pay to Mobile No." color="#0000ff" />
          <Button title="Payment Requests" color="#0000ff" />
          <Button title="Call Us" color="#0000ff" />
        </View> */}
        <View >
        <Text style={{ fontSize: 20, fontWeight: "bold", top:3,color: "#000000" }}>Product at your fingertips</Text>
        </View>
          {/* First card button row */}
        <View style={{ flexDirection: 'row',justifyContent: 'space-between', top:12, alignItems: 'center', }}>


          <TouchableOpacity
            style={styles.btnCrd1}
            onPress={() => console.log("1")}
            underlayColor='#fff'>
              <Icon1 name={'contacts'} size={65} color={'#c60202'} style={styles.styleIcon} />
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
               <Icon1 name={'customerservice'} size={60} color={'#c60202'} style={styles.styleIcon} />
            <Text style={styles.btnCrdTxt}> Call Us</Text>
          </TouchableOpacity>
        </View>
          {/* second card button row */}
        <View style={{ flexDirection: 'row',justifyContent: 'space-between', top:20, alignItems: 'center', }}>


          <TouchableOpacity
            style={styles.btnCrd1}
            onPress={() => console.log("1")}
            underlayColor='#fff'>
              <Icon1 name={'contacts'} size={65} color={'#c60202'} style={styles.styleIcon} />
              <Text style={styles.btnCrdTxt}>Insta Banking</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnCrd2}
            onPress={() => console.log("1")}
            underlayColor='#fff'>
            <Image style={styles.styleImgIcon} source={require('../assets/Images/apply-gry-rg.png')} />
            <Text style={styles.btnCrdTxt}> Offers </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnCrd3}
            onPress={() => console.log("1")}
            underlayColor='#fff'>
               <Icon1 name={'customerservice'} size={60} color={'#c60202'} style={styles.styleIcon} />
            <Text style={styles.btnCrdTxt}> More services</Text>
          </TouchableOpacity>
        </View>

        {/* carousel card */}
        <View  style={{top:ht*0.05}}>
          <Image source={require('../assets/Images/card_bg1.png')} style={styles.carouselCard}/>
        </View>

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
  viewStyle: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  titleText: { fontSize: 20, fontWeight: 'bold', color: 'black' },
  ovalBgH: {
    flex: 2,
    overflow: 'hidden',
    width: 50,
    height: 50,
    position: 'absolute',
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    top: 0,
    backgroundColor: 'transparent',
    transform: [
      { scaleX: 10 }
    ]
  },
  ovalBg: {
    backgroundColor: '#a0c580',
    width: 50, height: 300,
    transform: [
      { scaleX: 10 }
    ]
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 2,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  authHead: {
    position: 'absolute',
    width: wd,
    height: height * 0.32,
    top: 0,
    zIndex: 3,
    transform: [
      { scaleX: 1}
    ]
  },
  oval1: {
    position: 'absolute',
    width: wd,
    // height: height * 0.32,
    // backgroundColor: 'red',
    top: 0,
    flex: 1,
    flexDirection: 'column',
    // borderBottomEndRadius:50,
    // borderBottomLeftRadius:50,
    // borderBottomRightRadius:50,
    zIndex: 3,
    transform: [
      { scaleX: 1 }
    ]
  },
  //overlay
  overlay: {
    opacity: 0.5,
    backgroundColor: '#000000'
  },
  ici_white_font: {
    // height: 18,
    top: 50,
    left: 51

  },
  logo1: {
    // backgroundColor: 'rgba(0,0,0,0)',
    left: 10,
    top: 25,
    width: 100,
    height: 30

  },
  appVer: {
    top: 25,
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
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  headline: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white'
  },
  ///overlay end
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 16,
    width: 350,
  },

  btnCrd1: {
    width: wd * 0.28,
    height: ht * 0.15,
    left: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
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
    paddingTop: 20,
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
    right:5,
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
    color: '#b2b3b5',
    textAlign: 'center',
    top:65
    
  },
  styleIcon: {
		position: 'absolute',
    textAlign: 'center',
		top: 15,
		// left: 43
	},
  styleImgIcon:{
    position: 'absolute',
    alignItems:'center',
    width:wd*0.19,
    height:ht*0.10,
    top: 15,

  },
  carouselCard : {
   width: wd * 0.99,
   resizeMode :'contain',
   padding:5
    // height: ht * 0.15,
  }
});

export default AuthPage;
