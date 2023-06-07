import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
type FirstPageComponentProps = {};
const FirstPage: React.FunctionComponent<FirstPageComponentProps> = () => {

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleText}>WELCOME TO FIRST PAGE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  titleText: {fontSize: 20,fontWeight: 'bold',},
});

export default FirstPage;
