import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {ActiveOpacity, COLORS, FONTS, GROUP_FONT} from '../../Common/Theme';
import {DummyImage} from '../../Config/Setting';
import BottomTabHeader from '../Home/Components/BottomTabHeader';
import calculateDataPercentage from './Components/calculateDataPercentage';
import useCalculateAge from '../../Hooks/useCalculateAge';
import CommonIcons from '../../Common/CommonIcons';

const ProfileScreen = () => {
  const userData = useSelector((state: any) => state?.user);
  const percentage = calculateDataPercentage(userData);
  const Age = useCalculateAge(userData?.birthdate);
  const [IsImageLoading, setIsImageLoading] = useState(false);
  useEffect(() => {
    console.log('Age', userData?.birthdate, Age);
    console.log('Percentage:', percentage, Math.round(percentage));
  }, [percentage, userData, Age]);

  return (
    <View style={styles.container}>
      <BottomTabHeader hideSettingAndNotification={true} />
      <ScrollView bounces={false} style={styles.ProfileViewContainer}>
        <View style={styles.ContentView}>
          <View style={styles.ProfileImageView}>
            <AnimatedCircularProgress
              size={220}
              width={5}
              fill={percentage || 0}
              tintColor={COLORS.Primary}
              fillLineCap="round"
              backgroundColor={'transparent'}>
              {() => (
                <View style={styles.ImageContainerView}>
                  <FastImage
                    onLoadStart={() => setIsImageLoading(true)}
                    onLoad={() => setIsImageLoading(false)}
                    style={styles.ProfileImage}
                    source={{
                      uri: DummyImage,
                      priority: FastImage.priority.high,
                    }}
                  />
                  {IsImageLoading && (
                    <View style={styles.ImageLoaderView}>
                      <ActivityIndicator
                        size={45}
                        color={COLORS.Primary}
                        style={styles.ImageLoader}
                      />
                    </View>
                  )}
                </View>
              )}
            </AnimatedCircularProgress>
          </View>

          <View style={styles.UserNameAndLocationView}>
            <View style={styles.NameAndBadgeView}>
              <Text
                style={
                  styles.UserNameText
                }>{`${userData?.fullName}, ${Age}`}</Text>
              <Image
                source={CommonIcons.Verification_Icon}
                style={styles.VerifyIcon}
              />
            </View>
            <Text style={styles.UserCityText}>{userData?.city}</Text>
          </View>

          <View style={styles.TotalPercentageCompletedView}>
            <View style={styles.PercentageView}>
              <View style={styles.PercentageCountView}>
                <Text style={styles.PercentageCountText}>{`${Math.floor(
                  percentage,
                )}%`}</Text>
              </View>
              <View style={styles.CompleteProfileTextView}>
                <Text numberOfLines={2} style={styles.CompleteProfileText}>
                  Complete your profile to stand out
                </Text>
              </View>
            </View>
            <View style={styles.EditProfileView}>
              <TouchableOpacity
                activeOpacity={ActiveOpacity}
                style={styles.EditButtonView}>
                <Text style={styles.EditButtonText}>Edit profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Secondary,
  },
  ProfileImage: {
    width: '101%',
    height: '101%',
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  ImageContainerView: {
    width: 210,
    height: 210,
    borderWidth: 5,
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 100,
    borderColor: COLORS.White,
  },
  ProfileViewContainer: {
    flex: 1,
  },
  ContentView: {
    marginTop: 100,
  },
  ProfileImageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  UserNameAndLocationView: {
    marginTop: 25,
    marginVertical: 10,
    justifyContent: 'center',
  },
  NameAndBadgeView: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  UserNameText: {
    ...GROUP_FONT.h1,
    color: COLORS.Black,
    textAlign: 'center',
  },
  UserCityText: {
    marginTop: 3,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: FONTS.Medium,
    color: 'rgba(108, 108, 108, 1)',
  },
  VerifyIcon: {
    width: 22,
    height: 22,
    marginLeft: 8,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  TotalPercentageCompletedView: {
    flex: 1,
    width: '85%',
    height: 120,
    marginTop: 30,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLORS.Primary,
  },
  PercentageView: {
    zIndex: 999,
    width: '100%',
    height: '60%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  PercentageCountView: {
    width: 57,
    height: 57,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: COLORS.White,
  },
  PercentageCountText: {
    fontSize: 16,
    fontFamily: FONTS.Bold,
    textAlign: 'center',
    color: COLORS.Primary,
  },
  CompleteProfileTextView: {
    width: '70%',
    marginHorizontal: 10,
  },
  CompleteProfileText: {
    fontSize: 15,
    fontFamily: FONTS.Bold,
    color: COLORS.White,
  },
  EditProfileView: {
    zIndex: 999,
    width: '100%',
    height: '40%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  EditButtonView: {
    width: 130,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: COLORS.White,
  },
  EditButtonText: {
    ...GROUP_FONT.h3,
    textAlign: 'center',
    color: COLORS.Primary,
  },
  ImageLoaderView: {
    top: '37%',
    left: 0,
    right: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageLoader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
