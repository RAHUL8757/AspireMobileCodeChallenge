import React, { useRef, useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { Avatar, Button, Card, List, Paragraph } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { cardDetailRequest } from "../../../model/cardDetail-model/cardDetail.actions"
import { useDispatch, useSelector } from 'react-redux';

const ScreenWidth = Dimensions.get("screen").width
const ScreenHeight = Dimensions.get("screen").height

function LogoTitle() {
    return (
        <View style={{ justifyContent: "flex-end", alignContent: "flex-end", paddingTop: 15, paddingRight: 20, flexDirection: "row" }}>
            <Image
                source={require('../../../../assets/Logo.png')}
            />
        </View>
    );
}

const CardDetail = () => {
    const scrollRef = useRef();
    const dispatch = useDispatch();
    const [data, setData] = useState([])
    const [freezeCardActiveDeActive, setFreezeCardActiveDeActive] = useState(true)
    const [weeklySpendingLimitActiveDeActive, setWeeklySpendingLimitActiveDeActive] = useState(false)
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        dispatch(cardDetailRequest())
    }
    const freezeCard = () => {
        setFreezeCardActiveDeActive(!freezeCardActiveDeActive)
    }
    const weeklySpendingLimit = () => {
        setWeeklySpendingLimitActiveDeActive(!weeklySpendingLimitActiveDeActive)
    }
    const cardDetailData = useSelector(state => state.cardDetailReducer);
    useEffect(() => {
        const card = cardDetailData && cardDetailData.cardData && cardDetailData.cardData
        if (card) {
            setData(card)
        }
    }, [cardDetailData.isLoading])
    console.log(data.cardDetails,"+++++++++++++++++++++++++++++")
    return (
        <View style={{ flex: 1, backgroundColor: "#0C365A" }}>
            {data && data.cardDetails && data.cardDetails?.map((items, index) =>
                <View key={index}>
                    <View style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
                        <LogoTitle />
                        <Text style={{ fontSize: 23, fontWeight: "bold", left: 10, color: "#fff", padding: 10 }}>
                            Debit Card
                        </Text>
                        <View>
                            <Text style={{ fontSize: 14, fontWeight: "bold", left: 10, color: "#fff", padding: 10 }}>
                                Available balance
                            </Text>
                            <View style={{ flexDirection: "row", left: 10, alignItems: "center" }} >
                                <Text style={{
                                    fontSize: 15, fontWeight: "bold", borderRadius: 5,
                                    color: "#fff", paddingVertical: 4, paddingHorizontal: 20, backgroundColor: '#01D167'
                                }}>
                                    S$
                                </Text>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff", padding: 10 }}>
                                    {items.availableBalance}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView ref={scrollRef} contentContainerStyle={{
                        paddingVertical: 50
                    }}>
                        <View >
                            <View style={{
                                backgroundColor: "#fff",
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30,
                                top: 200,
                                height: ScreenHeight
                            }} >
                                <View style={{
                                    width: ScreenWidth,
                                    zIndex: -1,
                                    top: -100
                                }}>
                                    <View style={{
                                        width: ScreenWidth - 70,
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center",
                                    }}>
                                        <View style={{
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
                                        }}>
                                            <Image
                                                style={{ bottom: 10 }}
                                                source={require('../../../../assets/closeEye.png')}
                                            />
                                            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#01D167", paddingLeft: 10, bottom: 10 }}>Hide card number</Text>
                                        </View>
                                        <Card style={{
                                            backgroundColor: "#01D167",
                                            borderRadius: 12
                                            // borderTopLeftRadius: 30,
                                            // borderTopRightRadius: 30,
                                            // borderButtomLeftRadius: 30,
                                            // borderButtomRightRadius: 30,
                                        }}>
                                            <View style={{ justifyContent: "flex-end", alignContent: "flex-end", flexDirection: "row", padding: 20 }}>
                                                <Image
                                                    source={require('../../../../assets/AspireLogo.png')}
                                                />
                                            </View>
                                            <View>
                                                <Text style={{ fontSize: 16, fontWeight: "bold", left: 10, color: "#fff", padding: 10 }}>
                                                    {items.customername}
                                                </Text>
                                                <Text style={{
                                                    fontSize: 15, fontWeight: "bold", left: 10, color: "#fff",
                                                    padding: 10, letterSpacing: 2
                                                }}>
                                                    {items.cardNumber}
                                                </Text>
                                                <Text style={{ fontSize: 14, fontWeight: "bold", left: 10, color: "#fff", padding: 10 }}>
                                                    Thru: {items.dateofexy}    CVV: {items.cvv}
                                                </Text>
                                            </View>
                                            <View style={{ justifyContent: "flex-end", alignContent: "flex-end", flexDirection: "row", padding: 20 }}>
                                                <Image
                                                    source={require('../../../../assets/VisaLogo.png')}
                                                />
                                            </View>
                                        </Card>

                                    </View>
                                    <View style={{ padding: 5 }}>
                                        <View style={{ justifyContent: "space-between", marginVertical: 5, width: "90%", marginHorizontal: "auto", alignContent: "space-around", flexDirection: "row" }}>
                                            <Text style={{ fontSize: 14, fontWeight: "bold", left: 18, color: "#222222" }}>Debit card spending limit</Text>
                                            <Text style={{ fontSize: 14, paddingVertical: 2, fontWeight: "bold", left: 10, color: "#01D167" }}>${items.balance} <Text style={{ fontSize: 14, fontWeight: "bold", left: 10, color: "#ddd" }}>$ {items.totalAmount}</Text></Text>
                                        </View>
                                        <View style={{
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

                                        }}>
                                            <View style={{
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
                                            }} />
                                        </View>
                                    </View>
                                    <View style={{ width: ScreenWidth - 30, alignSelf: "center", backgroundColor: "transparent", }}>
                                        <List.Item
                                            title="Top-up account"
                                            description="Deposit money to your account to use with card"
                                            style={{
                                                backgroundColor: "#fff",
                                                paddingVertical: 1,
                                                marginVertical: 8,
                                            }}
                                            titleStyle={{ color: "#25345F" }}
                                            descriptionStyle={{ color: "#222222", opacity: 0.4 }}
                                            left={props => <Avatar.Image {...props} size={35} style={{ top: 4, marginRight: 6 }} source={require('../../../../assets/insight.png')} />}
                                        />
                                        <List.Item
                                            title="Weekly spending limit"
                                            description="Your weekly spending limit is S$ 5,000"
                                            style={{
                                                backgroundColor: "#fff",
                                                paddingVertical: 1,
                                            }}
                                            titleStyle={{ color: "#25345F" }}
                                            descriptionStyle={{ color: "#222222", opacity: 0.4 }}
                                            left={props => <Avatar.Image {...props} size={35} style={{ top: 4, marginRight: 6 }} source={require('../../../../assets/meter.png')} />}
                                            right={props => <FontAwesome5 {...props} size={35} color='#01d167' onPress={weeklySpendingLimit} name={weeklySpendingLimitActiveDeActive ? "toggle-on" : "toggle-off"} />}
                                        />
                                        <List.Item
                                            title="Freeze card"
                                            description="Your debit card is currently active"
                                            style={{
                                                backgroundColor: "#fff",
                                                paddingVertical: 1,
                                            }}
                                            titleStyle={{ color: "#25345F" }}
                                            descriptionStyle={{ color: "#222222", opacity: 0.4 }}
                                            left={props => <Avatar.Image {...props} size={35} style={{ top: 4, marginRight: 6 }} source={require('../../../../assets/nature.png')} />}
                                            right={props => <FontAwesome5 {...props} size={35} onPress={freezeCard} color='#01d167' name={freezeCardActiveDeActive ? "toggle-on" : "toggle-off"} />}
                                        />
                                        <List.Item
                                            title="Get a new card"
                                            style={{
                                                backgroundColor: "#fff",
                                                paddingVertical: 1,
                                            }}
                                            titleStyle={{ color: "#25345F" }}
                                            descriptionStyle={{ color: "#222222", opacity: 0.4 }}
                                            description="This deactivates your current debit card"
                                            left={props => <Avatar.Image {...props} size={35} style={{ top: 4, marginRight: 6 }} source={require('../../../../assets/addCard.png')} />}
                                        />
                                        <List.Item
                                            title="Deactivated cards"
                                            description="Your previously deactivated cards"
                                            style={{
                                                backgroundColor: "#fff",
                                                paddingVertical: 1,
                                            }}
                                            titleStyle={{ color: "#25345F" }}
                                            descriptionStyle={{ color: "#222222", opacity: 0.4 }}
                                            left={props => <Avatar.Image {...props} style={{ top: 4, marginRight: 6 }} size={35} source={require('../../../../assets/Transfer.png')} />}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            )}
        </View>
    );
}

export default CardDetail;