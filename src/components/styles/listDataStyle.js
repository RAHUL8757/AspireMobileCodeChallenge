import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors } from '../utlis/Color';
const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  containerOne: {
    backgroundColor: colors.cardTwo,
    paddingVertical: 1,
    elevation: 1,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    // borderColor: '#eee',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTwo: {
    backgroundColor: colors.cardOne,
    paddingVertical: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#99999940',
    elevation: 1,
  },
  todayIconColor: {
    color: colors.green
  },
  overDueIconColor: {
    color: colors.red
  },
  nextSevenDayIconColor: {
    color: colors.tab
  },
  topTabBarToday: {
    backgroundColor: colors.green,
    top: 5
  },
  topTabBarOverDue: {
    backgroundColor: colors.red,
    top: 5
  },
  topTabBarnextSevenDay: {
    backgroundColor: colors.tab,
    top: 5,
    right:3
  }
});
