import axios from 'base-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// if testing mode
// this has to be populated after baseUrl is obtained from first sceeen

  axios.defaults.baseURL = 'https://aspirecard.free.beeceptor.com';

//  else {
//   // write your code here to fetch url from storage
//   AsyncStorage.getItem('url').then((value)=>{
//     axios.defaults.baseURL = value;
//   })

// }

// auth token has to be added by obtaining it from AsyncStorage
// AsyncStorage.getItem('token').then((value)=>{
//     axios.defaults.headers.common['Authorization'] = 'Bearer '+value;
// })
// multipart/form-data; boundary=--------------------------495333309292784692928598
// this header can be overwritten directly while sending requests
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;