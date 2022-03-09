import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors } from '../utlis/Color';

const ScreenWidth = Dimensions.get("screen").width
const ScreenHeight = Dimensions.get("screen").height

export default StyleSheet.create({
    mainImageContainer: {
        justifyContent: "flex-end",
        alignContent: "flex-end",
        paddingTop: 15,
        paddingRight: 20,
        flexDirection: "row"
    },
    container: {
        flex: 1,
        backgroundColor: "#0C365A"
    },
    containerLogoAndTitle: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
    },
    debitCardTitle: {
        fontSize: 23,
        fontWeight: "bold",
        left: 10,
        color: "#fff",
        padding: 10
    },
    availableBalance: {
        fontSize: 14,
        fontWeight: "bold",
        left: 10,
        color: "#fff",
        padding: 10
    },
    availableBalanceTitle: {
        flexDirection: "row",
        left: 10,
        alignItems: "center"
    },
    availableBalanceTitleText: {
        fontSize: 15,
        fontWeight: "bold",
        borderRadius: 5,
        color: "#fff",
        paddingVertical: 4,
        paddingHorizontal: 20,
        backgroundColor: '#01D167'
    },
    availableBalanceTitleAmount: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        padding: 10
    },
    cardContainer: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        top: 200,
        height: ScreenHeight
    },
    cardSecondContainer: {
        width: ScreenWidth,
        zIndex: -1,
        top: -100
    },
    cardThirdContainer: {
        width: ScreenWidth - 70,
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
    },
    cardFourthContainer: {
        width: ScreenWidth / 2 - 30,
        justifyContent: "flex-end",
        alignContent: "flex-end",
        flexDirection: "row",
        backgroundColor: "#fff",
        alignSelf: "flex-end",
        alignItems: "center",
        padding: 20,
        top: 20,
        right: 2,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardHide: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#01D167",
        paddingLeft: 10,
        bottom: 10
    },
    card: {
        backgroundColor: "#01D167",
        borderRadius: 12
    },
    cardViewContainer: {
        justifyContent: "flex-end",
        alignContent: "flex-end",
        flexDirection: "row",
        padding: 20
    },
    customerName: {
        fontSize: 16,
        fontWeight: "bold",
        left: 10,
        color: "#fff",
        padding: 10
    },
    cardNumber: {
        fontSize: 15,
        fontWeight: "bold",
        left: 10,
        color: "#fff",
        padding: 10,
        letterSpacing: 2
    },
    dateAndCvv: {
        fontSize: 14,
        fontWeight: "bold",
        left: 10,
        color: "#fff",
        padding: 10
    },
    containerSecond: {
        padding: 5
    },
    spendingLimitContainer: {
        justifyContent: "space-between",
        marginVertical: 5,
        width: "90%",
        marginHorizontal: "auto",
        alignContent: "space-around",
        flexDirection: "row"
    },
    spendingLimitTitle: {
        fontSize: 14,
        fontWeight: "bold",
        left: 18,
        color: "#222222"
    },
    spendingLimitValue: {
        fontSize: 14,
        paddingVertical: 2,
        fontWeight: "bold",
        left: 10,
        color: "#01D167"
    },
    lineContainer: {
        width: ScreenWidth - 50,
        backgroundColor: "#e5faf0",
        height: 16,
        marginTop: 2,
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        paddingBottom: 4,

    },
    lineContainerData: {
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 8,
        borderTopWidth: 16,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderRightColor: "transparent",
        borderTopColor: "#01D167",
        width: ScreenWidth / 4
    },
    listContainer: {
        width: ScreenWidth - 30,
        alignSelf: "center",
        backgroundColor: "transparent"
    },
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
