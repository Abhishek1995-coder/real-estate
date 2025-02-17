import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, Platform, Dimensions, ScrollView, FlatList } from 'react-native'
import React from 'react'

const Appointment = ({ navigation }) => {
    const { width } = Dimensions.get('window');
    const scaleFontSize = (size) => (width / 375) * size;
    const arryType = [{ 'id': '1', 'time': '10:00 AM' }, { 'id': '2', 'time': '12:00 PM' }, { 'id': '3', 'time': '01:00 PM' }, { 'id': '4', 'time': '02:00 PM' }, { 'id': '5', 'time': '04:00 PM' }, { 'id': '6', 'time': '05:00 PM' }]

    const getDatesFromToday = (numDays) => {
        const dates = [];
        const today = new Date();
        // Generate dates from today onward
        for (let i = 0; i < numDays; i++) {
            const futureDate = new Date(today);
            futureDate.setDate(today.getDate() + i);
            const words = futureDate.toDateString().split(" ");
            // Add days to today
            dates.push(words[1] + ' ' + words[2]); // Format it to a readable string
        }
        return dates;
    };

    const datesFromToday = getDatesFromToday(15);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F3F5' }}>
            <View style={{ flex: 1, backgroundColor: '#F0F3F5', paddingHorizontal: 10, marginTop: Platform.OS == 'ios' ? 10 : 35 }} >
                <View style={{ height: 50 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }}>
                            <Image style={{ width: 30, height: 30 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/left.png')}></Image>
                        </TouchableOpacity>
                        <Text style={{ color: '#174666', fontSize: 18, fontWeight: '800', marginLeft: 30 }}>Book Appointment</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: 'white', borderRadius: 12, paddingTop: 8, marginBottom: 8 }} >
                    <View style={{ marginLeft: 13, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ width: 130, height: 130, marginRight: 10, borderRadius: 7 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/doctor.png')}></Image>
                            <View style={{ marginBottom: 9 }}>
                                <Text style={{ color: '#1C665E', fontSize: scaleFontSize(13), fontWeight: '600', marginTop: 5 }}>Dr Denies Martine</Text>
                                <Text style={{ color: '#1C665E', fontSize: scaleFontSize(12), fontWeight: '600', marginTop: 3 }}>MBBS, MD</Text>
                                <Text style={{ color: '#1E5A84', fontSize: scaleFontSize(12), fontWeight: '500', marginTop: 3 }}>Cardiologist</Text>
                                <Text style={{ color: '#333333', fontSize: scaleFontSize(12), fontWeight: '500', marginTop: 3 }}>42 year experience</Text>
                                <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                    <Image style={{ width: 12, height: 12, marginRight: 4, marginTop: 5 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/location.png')}></Image>
                                    <Text style={{ color: '#333333', fontSize: scaleFontSize(12), fontWeight: '500', marginTop: 2 }}>Apollo hospital, west ham</Text>
                                </View>
                                <View style={{ flexDirection: 'row', height: 28, marginRight: 4 }}>
                                    <Text style={{ color: '#2A7FBA', fontSize: scaleFontSize(12), fontWeight: '600', marginVertical: 2 }}>Consulting Fee</Text>
                                    <Text numberOfLines={0} style={{ color: '#2A7FBA', fontSize: scaleFontSize(12), fontWeight: '400', marginVertical: 3, marginLeft: 10 }}>$500</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={{ color: '#1C665E', fontSize: scaleFontSize(13), fontWeight: '600', marginTop: 5 }}>Choose a date </Text>
                <View style={{ height: 45, flexDirection: 'row', marginVertical: 15, marginHorizontal: 12 }}>
                    <ScrollView showsHorizontalScrollIndicator={true} horizontal={true}>
                        {
                            datesFromToday.map((date, index) => (
                                <TouchableOpacity onPress={() => {

                                }}>
                                    <View style={{ marginRight: 6, backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 6, alignItems: 'center', borderRadius: 7, }} key={index}>
                                        {/* <Image style={{width:160,height:160,marginTop:10}} source=></Image> */}
                                        <Text key={index} style={{ color: '#1C665E', fontSize: scaleFontSize(13), fontWeight: '600' }}>{date}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
                <Text style={{ color: '#1C665E', fontSize: scaleFontSize(13), fontWeight: '600', marginVertical: 10 }}>9 slots available </Text>
                <View style={{ height: 100 }}>
                    <FlatList bounces={false} numColumns={4} showsVerticalScrollIndicator={false} data={arryType}
                        renderItem={({ item }) =>
                            <View style={{ marginRight: 6, backgroundColor: 'white', alignItems: 'center', borderRadius: 5, marginBottom: 9, }} id={item.id}>
                                <Text style={{ color: '#1E5A84', fontSize: scaleFontSize(13), fontWeight: '600', marginVertical: 5, paddingHorizontal: 12 }}>{item.time.toUpperCase()}</Text>
                            </View>
                        }
                        keyExtractor={(item) => item.id} />
                </View>
                <Text style={{ color: '#1C665E', fontSize: scaleFontSize(13), fontWeight: '800', marginVertical: 10, textAlign: 'center' }}>Terms And Conditions </Text>
                <Text style={{ color: '#1C665E', fontSize: scaleFontSize(11), fontWeight: '400', marginVertical: 4, textAlign: 'center' }}>the document governing the contractual relationship between the provider of a service and its user. On the web, this document is often also called “Terms of Service” (ToS),.</Text>
                <TouchableOpacity style={{left:20,right:20,bottom:20,position:'absolute',height:45,backgroundColor:'#1E5A84',borderRadius:7,justifyContent:'center'}} onPress={()=>{
navigation.navigate('booking')
                }}>
                <View style={{justifyContent:'center'}}>
                <Text style={{ color: 'white', fontSize: scaleFontSize(13), fontWeight: '800', textAlign: 'center' }}>Proceed</Text>
                </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Appointment

const styles = StyleSheet.create({})