import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors } from '../utlis/Color';
const { width } = Dimensions.get('screen');

export default StyleSheet.create({
    tabBarBadge: {
        left: 6,
        fontSize: 10,
        elevation: 8,
        color: '#fff',
        fontWeight: '500',
        backgroundColor: '#c74207',
    },
    tabBarLabel: {
        fontSize: 13
    },
    tabBar: {
        elevation: 8,
        height: Platform.OS == "ios" ? 90 : 60
    }

});
