import {StyleSheet} from 'react-native';
import {CommonSize} from '../../../Common/CommonSize';
import {COLORS, FONTS} from '../../../Common/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  SubContainerView: {
    marginHorizontal: hp('2.7%'),
    marginVertical: hp('1.5%'),
  },
  NumberContainer: {
    justifyContent: 'center',

    marginHorizontal: hp('1.5%'),
    marginVertical: hp('1.5%'),
  },
  MyNumberTextView: {
    justifyContent: 'center',
  },
  MyNumberText: {
    color: COLORS.Black,
    fontSize: hp('2.7%'),
    fontFamily: FONTS.Bold,
  },
  PhoneNumberView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: hp('1.5%'),
    marginTop: hp('1.9%'),
  },
  UserCountyAndCodeView: {
    width: '30%',
    justifyContent: 'center',
    alignSelf: 'center',
    height: CommonSize(35),
    borderBottomWidth: CommonSize(2),
    borderBottomColor: COLORS.Black,
  },
  UserNumberTextView: {
    width: '65%',
    justifyContent: 'center',
    alignSelf: 'center',
    top: CommonSize(-3.5),
    height: CommonSize(45),
    borderBottomWidth: CommonSize(2),
    borderBottomColor: COLORS.Black,
  },
  UserNumberTextStyle: {
    top: 5,
    alignContent: 'center',
    color: COLORS.Black,
    fontFamily: FONTS.SemiBold,
    fontSize: hp('2.2%'),
  },
  NumberHelpText: {
    color: COLORS.Gray,
    textAlign: 'left',
    fontFamily: FONTS.Medium,
    lineHeight: hp('2.2%'),
  },
  LearnWhatText: {
    color: COLORS.Blue,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: COLORS.Black,
    fontFamily: FONTS.Bold,
  },
  NumberChangesAlertText: {
    color: 'rgba(68, 65, 66, 1)',
    fontFamily: FONTS.Regular,
  },
});

export default styles;
