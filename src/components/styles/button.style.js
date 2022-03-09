import {StyleSheet, Platform, Dimensions} from 'react-native';
import {colors} from '../utlis/Color';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    paddingVertical: 13,
    elevation: 8,
    backgroundColor: colors.btnColor,
    borderRadius: 25,
    paddingHorizontal: 12,
    shadowColor: '#999',
    shadowRadius: 20,
    shadowOffset: {width: 3, height: 33}
  },
  enabled: {
    opacity: 1,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  imageContainer : {
    tintColor: colors.btnColor,
    opacity:1,
    resizeMode:"center",
    shadowColor: colors.btnColor,
    shadowOffset: {height: 2},
    shadowOpacity: 0.5,
    backgroundColor:"red"
  }
});
