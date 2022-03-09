import {StyleSheet, Platform, Dimensions} from 'react-native';
import {colors} from '../utlis/Color';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  signInText: {
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 3,
    color: colors.btnColor,
    elevation: 8,
  },
  inputContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  mainContainer : {
    justifyContent: 'center',
    flex: 1,
    alignContent:"center",
    width: windowWidth,
    height:windowHeight
    // bottom:80
  },
  imageContainer : {
    tintColor: colors.btnColor,
    opacity:1,
    resizeMode:"center",
    shadowColor: colors.btnColor,
    shadowOffset: {height: 2},
    shadowOpacity: 0.5,
  },
  image: {
    flex: 1,
    zIndex:-1,
    width: windowWidth,
    height:windowHeight
  },
  textInputImage: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: colors.btnColor,
    marginTop: Platform.OS == 'ios' ? -1 : 5,
    alignSelf: Platform.OS == 'ios' ? 'flex-start' : 'center',
  },
  emailContainer: {
    flexDirection: 'row',
    marginBottom: Platform.OS == 'ios' ? 24 : 8,
  },
  email: {
    width: windowWidth - 160,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingBottom: 8,
  },
  separator: {
    marginVertical: 4,
  },
  passwordContainer: {
    flexDirection: 'row',
  },
  password: {
    width: windowWidth - 160,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingBottom: 8,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: colors.red,
    marginTop: 10,
  },
  forgotPasswordText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  loginButton: {
    alignSelf: 'center',
    width: windowWidth - 110,
    zIndex:-1,
  },
  goBackToLogin: {
    alignSelf: 'center',
    width: windowWidth - 150,
  },
  CompanyButton: {
    alignItems: 'center',
    width: '100%',
    marginTop: '50%',
  },
  gap : {
    height: Platform.OS == 'ios' ? 40 : 60
  }
});
