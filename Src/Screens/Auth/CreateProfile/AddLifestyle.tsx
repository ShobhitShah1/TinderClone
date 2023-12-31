import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC, useCallback, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {COLORS, FONTS, GROUP_FONT} from '../../../Common/Theme';
import GradientButton from '../../../Components/AuthComponents/GradientButton';
import LifestyleData from '../../../Components/Data/LifestyleData';
import CreateProfileHeader from './CreateProfileHeader';
import CreateProfileStyles from './styles';

const ITEM_HEIGHT: number = 70;

interface HabitItemProps {
  habit: {id: number; habit: string; options: string[]};
  selectedOption?: string;
  onPress: (habitId: number, option: string) => void;
}

const AddLifestyle: FC = () => {
  let ProgressCount: number = 0.7;
  const navigation =
    useNavigation<NativeStackNavigationProp<{LoginStack: {}}>>();

  const [selectedItems, setSelectedItems] = useState<Record<string, string>>(
    {},
  );

  // const chunkArray = (array: string[], chunkSize: number) => {
  //   const result = [];
  //   for (let i = 0; i < array.length; i += chunkSize) {
  //     result.push(array.slice(i, i + chunkSize));
  //   }
  //   return result;
  // };

  const HabitItem: FC<HabitItemProps> = React.memo(
    ({habit, selectedOption, onPress}) => {
      return (
        <React.Fragment>
          <View key={habit.id} style={styles.habitContainer}>
            <Text style={styles.habitTitle}>{habit.habit}</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{flexDirection: 'row', maxWidth: '100%'}}>
              {habit.options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    selectedOption === option && styles.selectedOption,
                  ]}
                  onPress={() => onPress(habit.id, option)}>
                  <Text
                    style={[
                      styles.CategoriesText,
                      selectedOption === option &&
                        styles.SelectedCategoriesText,
                    ]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={styles.BottomLine} />
        </React.Fragment>
      );
    },
  );

  const handleOptionPress = useCallback((habitId: number, option: string) => {
    setSelectedItems(prevSelection => ({
      ...prevSelection,
      [habitId.toString()]: option,
    }));
  }, []);

  // const isCategoryMissing = useCallback(() => {
  //   const missingCategories: string[] = [];
  //   LifestyleData.forEach(habit => {
  //     if (!Object.keys(selectedItems).includes(habit.id.toString())) {
  //       missingCategories.push(habit.habit);
  //     }
  //   });
  //   return missingCategories;
  // }, [selectedItems]);

  const renderItem = ({
    item,
  }: {
    item: {id: number; habit: string; options: string[]};
  }) => (
    <HabitItem
      habit={item}
      selectedOption={selectedItems[item.id.toString()]}
      onPress={handleOptionPress}
    />
  );

  return (
    <View style={CreateProfileStyles.Container}>
      <CreateProfileHeader ProgressCount={ProgressCount} Skip={true} />
      <View style={[styles.ContentView]}>
        <Text style={CreateProfileStyles.TitleText}>
          Let's talk lifestyle habits, UserNameHere!
        </Text>
        <Text style={styles.HabitsMatchText}>
          Do their habits match yours? you go first
        </Text>
      </View>

      <View style={{height: '70%'}}>
        <FlatList
          data={LifestyleData}
          renderItem={renderItem}
          style={{height: '100%'}}
          initialNumToRender={20}
          nestedScrollEnabled={false}
          keyExtractor={item => item.id.toString()}
          removeClippedSubviews={true}
          // getItemLayout={(_, index) => ({
          //   length: ITEM_HEIGHT,
          //   offset: ITEM_HEIGHT * index,
          //   index,
          // })}
        />
      </View>

      {/* Missing Category To Track On Letter */}

      {/* <View style={styles.checkMissingCategories}>
        <Text style={styles.missingCategoriesText}>
          {`Missing Categories: ${isCategoryMissing().join(', ')}`}
        </Text>
      </View> */}

      <View style={[styles.BottomButtonWidth]}>
        <View style={styles.ButtonContainer}>
          <GradientButton
            Title={'Next'}
            Disabled={false}
            Navigation={() => {
              navigation.navigate('LoginStack', {
                screen: 'WhatElseExtra',
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HabitsMatchText: {
    ...GROUP_FONT.h3,
    marginTop: hp('1%'),
    fontFamily: FONTS.Regular,
  },
  optionsContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  ContentView: {
    overflow: 'hidden',
    maxWidth: '100%',
    marginVertical: hp('1.5%'),
    paddingBottom: hp('1.5%'),
    paddingHorizontal: hp('1.9%'),
    backgroundColor: COLORS.White,
    width: '100%',
  },

  habitContainer: {
    marginHorizontal: hp('1.9%'),
  },
  BottomLine: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: hp('0.5%'),
    marginBottom: hp('2%'),
    justifyContent: 'center',
    marginHorizontal: hp('1.9%'),
    borderBottomWidth: hp('0.05%'),
    borderBottomColor: COLORS.Gray,
  },
  habitTitle: {
    ...GROUP_FONT.h3,
  },
  optionButton: {
    marginRight: hp('0.8%'),
    paddingHorizontal: hp('1%'),
    paddingVertical: hp('0.5%'),
    marginVertical: hp('1.5%'),
    borderWidth: hp('0.08%'),
    borderRadius: hp('2%'),
    borderColor: COLORS.Gray,
  },
  selectedOption: {
    backgroundColor: COLORS.Primary, // Highlight selected option
  },
  CategoriesText: {
    textAlign: 'center',
    ...GROUP_FONT.h4,
    color: COLORS.Gray,
  },
  SelectedCategoriesText: {
    ...GROUP_FONT.h4,
    color: COLORS.White,
  },
  checkMissingCategories: {
    marginTop: 16,
  },
  missingCategoriesText: {
    ...GROUP_FONT.h3,
    color: COLORS.White,
  },
  ButtonContainer: {
    backgroundColor: COLORS.White,
    width: '90%',
    alignSelf: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  BottomButtonWidth: {
    width: '100%',
    position: 'absolute',
    bottom: hp('1.5%'),
    borderTopColor: COLORS.Placeholder,
    borderTopWidth: hp('0.07%'),
    paddingTop: hp('1.5%'),
  },
});

export default AddLifestyle;
