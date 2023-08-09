import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ActiveOpacity, COLORS} from '../../../Common/Theme';
import AuthHeader from '../../../Components/AuthComponents/AuthHeader';
import styles from './styles';

export default function CreateAccount() {
  const navigation =
    useNavigation<NativeStackNavigationProp<{LoginStack: {}}>>();
  return (
    <View style={styles.Container}>
      <AuthHeader Logo={true} onPress={() => {}} />

      <View style={styles.OopsView}>
        <Text style={styles.OopsText}>Oops!</Text>
      </View>

      <View style={styles.DontFoundTextView}>
        <Text style={styles.DontFoundText}>
          We couldn’t find a Tinder account connected to that Facebook Account.
        </Text>
      </View>

      <TouchableOpacity activeOpacity={ActiveOpacity}>
        <LinearGradient
          colors={COLORS.ButtonGradient}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.CreateAccountButton}>
          <Text style={styles.NewAccountText}>CREATE NEW ACCOUNT</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}