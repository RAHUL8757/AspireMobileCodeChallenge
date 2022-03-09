import React, { useRef, useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { Avatar, Button, Card, List, Paragraph } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { cardDetailRequest } from "../../../model/cardDetail-model/cardDetail.actions"
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/dashboard.style'


function LogoTitle() {
    return (
        <View style={styles.mainImageContainer}>
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
    return (
        <View style={styles.container}>
            {data && data.cardDetails && data.cardDetails?.map((items, index) =>
                <View key={index}>
                    <View style={styles.containerLogoAndTitle}>
                        <LogoTitle />
                        <Text style={styles.debitCardTitle}>
                            Debit Card
                        </Text>
                        <View>
                            <Text style={styles.availableBalance}>
                                Available balance
                            </Text>
                            <View style={styles.availableBalanceTitle} >
                                <Text style={styles.availableBalanceTitleText}>
                                    S$
                                </Text>
                                <Text style={styles.availableBalanceTitleAmount}>
                                    {items.availableBalance}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView ref={scrollRef} contentContainerStyle={{
                        paddingVertical: 50
                    }}>
                        <View >
                            <View style={styles.cardContainer} >
                                <View style={styles.cardSecondContainer}>
                                    <View style={styles.cardThirdContainer}>
                                        <View style={styles.cardFourthContainer}>
                                            <Image
                                                style={{ bottom: 10 }}
                                                source={require('../../../../assets/closeEye.png')}
                                            />
                                            <Text style={styles.cardHide}>Hide card number</Text>
                                        </View>
                                        <Card style={styles.card}>
                                            <View style={styles.cardViewContainer}>
                                                <Image
                                                    source={require('../../../../assets/AspireLogo.png')}
                                                />
                                            </View>
                                            <View>
                                                <Text style={styles.customerName}>
                                                    {items.customername}
                                                </Text>
                                                <Text style={styles.cardNumber}>
                                                    {items.cardNumber}
                                                </Text>
                                                <Text style={styles.dateAndCvv}>
                                                    Thru: {items.dateofexy}    CVV: {items.cvv}
                                                </Text>
                                            </View>
                                            <View style={styles.cardViewContainer}>
                                                <Image
                                                    source={require('../../../../assets/VisaLogo.png')}
                                                />
                                            </View>
                                        </Card>

                                    </View>
                                    <View style={styles.containerSecond}>
                                        <View style={styles.spendingLimitContainer}>
                                            <Text style={styles.spendingLimitTitle}>Debit card spending limit</Text>
                                            <Text style={styles.spendingLimitValue}>${items.balance} <Text style={{ fontSize: 14, fontWeight: "bold", left: 10, color: "#ddd" }}>$ {items.totalAmount}</Text></Text>
                                        </View>
                                        <View style={styles.lineContainer}>
                                            <View style={styles.lineContainerData} />
                                        </View>
                                    </View>
                                    <View style={styles.listContainer}>
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