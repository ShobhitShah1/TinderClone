/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {
  Alert,
  BackHandler,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '../../../Common/Theme';
import GradientButton from '../../../Components/AuthComponents/GradientButton';
import CustomTextInput from '../../../Components/CustomTextInput';
import {useUserData} from '../../../Contexts/UserDataContext';
import useKeyboardVisibility from '../../../Hooks/useKeyboardVisibility';
import {LocalStorageFields} from '../../../Types/LocalStorageFields';
import CreateProfileHeader from './Components/CreateProfileHeader';
import CreateProfileStyles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {updateField} from '../../../Redux/Action/userActions';

const IdentifyYourSelf: FC = () => {
  //* Get Key Name. From Where You Want To Store Data
  const KeyboardVisible = useKeyboardVisibility();
  const userData = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  //* Ref's
  const ScrollViewRef = useRef<ScrollView>(null);
  const dayInputRef = useRef(null);
  const monthInputRef = useRef(null);
  const yearInputRef = useRef(null);

  //* All States
  const [FirstName, setFirstName] = useState<string>(userData.fullName);
  const [BirthDateDD, setBirthDateDD] = useState<string>(
    userData.birthdate ? String(userData.birthdate).split('/')[0] : '',
  );
  const [BirthDateMM, setBirthDateMM] = useState<string>(
    userData.birthdate ? String(userData.birthdate).split('/')[1] : '',
  );
  const [BirthDateYYYY, setBirthDateYYYY] = useState<string>(
    userData.birthdate ? String(userData.birthdate).split('/')[2] : '',
  );
  const [CityName, setCityName] = useState<string>(userData.city);
  const [selectedGender, setSelectedGender] = useState<string>(userData.gender);

  const genders = ['Man', 'Woman', 'Other'];

  useEffect(() => {
    const handleBackPress = () => {
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

  //* Navigation
  const navigation =
    useNavigation<NativeStackNavigationProp<{LoginStack: {}}>>();

  const handleTextChange = (value: string, nextInputRef: any) => {
    if (value.length === 2) {
      nextInputRef.current.focus();
    }
  };

  //* On Next Click This Will Call And Store Data
  // const handleInputChange = useCallback(
  //   (field: string, value: string | boolean) => {
  //     dispatch({type: 'UPDATE_FIELD', field, value});
  //   },
  //   [dispatch],
  // );

  const handleGenderSelection = (gender: string) => {
    setSelectedGender(gender);
  };

  console.log(
    String(`${BirthDateDD}/${BirthDateMM}/${BirthDateYYYY}`).split('/')[0],
  );
  console.log(
    String(`${BirthDateDD}/${BirthDateMM}/${BirthDateYYYY}`).split('/')[1],
  );
  console.log(
    String(`${BirthDateDD}/${BirthDateMM}/${BirthDateYYYY}`).split('/')[2],
  );

  //* Modal Button Navigate To Screen
  const OnLetsGoButtonPress = useCallback(() => {
    Keyboard.dismiss();

    //* Check if required fields are filled
    if (
      !FirstName ||
      !BirthDateDD ||
      !BirthDateMM ||
      !BirthDateYYYY ||
      !selectedGender ||
      !CityName
    ) {
      //* Show an alert with a proper message
      Alert.alert(
        'Incomplete Information',
        'Please fill in all required fields.',
      );
      return;
    }

    //* If all required fields are filled, update the context and navigate
    dispatch(updateField(LocalStorageFields.fullName, FirstName));
    dispatch(
      updateField(
        LocalStorageFields.birthdate,
        `${BirthDateDD}/${BirthDateMM}/${BirthDateYYYY}`,
      ),
    );
    dispatch(updateField(LocalStorageFields.gender, selectedGender));
    dispatch(updateField(LocalStorageFields.city, CityName));

    // handleInputChange(LocalStorageFields.fullName, FirstName);
    // handleInputChange(
    // LocalStorageFields.birthdate,
    // `${BirthDateDD}/${BirthDateMM}/${BirthDateYYYY}`,
    // );
    // handleInputChange(LocalStorageFields.gender, selectedGender);
    // handleInputChange(LocalStorageFields.city, CityName);

    //* Use navigation.navigate callback to update context after navigation
    navigation.navigate('LoginStack', {
      screen: 'SexualOrientationScreen',
    });
  }, [
    navigation,
    FirstName,
    BirthDateDD,
    BirthDateMM,
    BirthDateYYYY,
    selectedGender,
    CityName,
  ]);

  return (
    <View style={CreateProfileStyles.Container}>
      <CreateProfileHeader ProgressCount={1} Skip={false} hideBack={true} />

      <ScrollView
        ref={ScrollViewRef}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
        automaticallyAdjustKeyboardInsets
        style={[styles.ContentView]}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.TitleText}>Identify your{'\n'}real self</Text>
        <Text style={styles.subTitleText}>
          Introduce yourself fill out the details{'\n'}so people know about you.
        </Text>

        <View style={styles.AllInputContainerView}>
          {/* Name */}
          <View style={styles.TextViewForSpace}>
            <Text style={styles.NameText}>My name is</Text>
            <CustomTextInput
              value={FirstName}
              onChangeText={value => {
                setFirstName(value);
              }}
              textContentType="givenName"
              placeholder="Enter your name"
              style={styles.TextInputStyle}
              placeholderTextColor={COLORS.Gray}
            />
          </View>

          {/* Birthday */}
          <View style={styles.TextViewForSpace}>
            <Text style={styles.NameText}>My birthday is</Text>
            <View style={styles.BirthdayInputView}>
              <CustomTextInput
                ref={dayInputRef}
                editable={true}
                keyboardType={'number-pad'}
                value={BirthDateDD}
                onChangeText={value => {
                  setBirthDateDD(value);
                  handleTextChange(value, monthInputRef);
                }}
                maxLength={2}
                placeholder="DD"
                style={[styles.TextInputStyle, {width: hp('12%')}]}
                placeholderTextColor={COLORS.Gray}
              />
              <CustomTextInput
                ref={monthInputRef}
                value={BirthDateMM}
                keyboardType={'number-pad'}
                onChangeText={value => {
                  setBirthDateMM(value);
                  handleTextChange(value, yearInputRef);
                }}
                maxLength={2}
                placeholder="MM"
                style={[styles.TextInputStyle, {width: hp('12%')}]}
                placeholderTextColor={COLORS.Gray}
              />
              <CustomTextInput
                ref={yearInputRef}
                value={BirthDateYYYY}
                keyboardType={'number-pad'}
                onChangeText={value => {
                  setBirthDateYYYY(value);
                }}
                maxLength={4}
                placeholder="YYYY"
                style={[styles.TextInputStyle, {width: hp('12%')}]}
                placeholderTextColor={COLORS.Gray}
              />
            </View>
          </View>

          {/* Im */}
          <View style={styles.TextViewForSpace}>
            <Text style={styles.NameText}>I am a</Text>
            <View style={styles.BirthdayInputView}>
              {genders.map((gender, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleGenderSelection(gender)}
                  style={[
                    styles.GenderView,
                    {
                      width: hp('12%'),
                      backgroundColor:
                        selectedGender === gender
                          ? COLORS.Primary
                          : COLORS.White,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.GenderText,
                      {
                        color:
                          selectedGender === gender
                            ? COLORS.White
                            : COLORS.Gray,
                      },
                    ]}>
                    {gender}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* From */}
          <View style={styles.TextViewForSpace}>
            <Text style={styles.NameText}>I am from</Text>
            <CustomTextInput
              value={CityName}
              onChangeText={value => {
                setCityName(value);
              }}
              onPressIn={() => {
                ScrollViewRef.current?.scrollToEnd({animated: true});
              }}
              textContentType="givenName"
              placeholder="Enter your city name"
              style={styles.TextInputStyle}
              placeholderTextColor={COLORS.Gray}
            />
          </View>
        </View>
      </ScrollView>

      {!KeyboardVisible && (
        <View style={styles.BottomButton}>
          <GradientButton
            isLoading={false}
            Title={'Continue'}
            Disabled={
              !FirstName ||
              !BirthDateDD ||
              !BirthDateMM ||
              !BirthDateYYYY ||
              !selectedGender ||
              !CityName
                ? true
                : false
            }
            Navigation={() => OnLetsGoButtonPress()}
          />
        </View>
      )}
    </View>
  );
};

export default IdentifyYourSelf;

const styles = StyleSheet.create({
  ContentView: {
    width: '100%',
    paddingTop: hp('0.5%'),
    paddingBottom: hp('13%'),
    paddingHorizontal: hp('4.2%'),
  },
  TitleText: {
    color: COLORS.Primary,
    fontSize: hp('3.3%'),
    fontFamily: FONTS.Bold,
  },
  TextInputStyle: {
    padding: 0,
    color: COLORS.Black,
    fontSize: hp('1.7%'),
    borderColor: COLORS.Black,
    backgroundColor: COLORS.White,
    height: hp('6.8%'),
    fontFamily: FONTS.SemiBold,
    borderRadius: SIZES.radius,
    textAlign: 'center',
  },
  GenderView: {
    padding: 0,
    backgroundColor: COLORS.White,
    height: hp('6.8%'),
    width: wp('85%'),
    borderRadius: SIZES.radius,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  GenderText: {
    fontFamily: FONTS.Medium,
    color: COLORS.Gray,
    fontSize: hp('1.7%'),
  },
  BottomButton: {
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: hp('2%'),
    overflow: 'hidden',
    justifyContent: 'center',
  },
  TextViewForSpace: {
    alignContent: 'center',
    marginBottom: hp('1.5%'),
  },
  NameText: {
    marginTop: hp('2%'),
    marginBottom: hp('1.5%'),
    fontSize: hp('1.8%'),
    color: COLORS.Primary,
    fontFamily: FONTS.Bold,
  },
  BirthdayInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  subTitleText: {
    fontSize: hp('1.6%'),
    fontFamily: FONTS.SemiBold,
    color: COLORS.Black,
    marginTop: hp(1),
  },
  AllInputContainerView: {
    width: '100%',
    marginTop: hp('2%'),
  },
});
