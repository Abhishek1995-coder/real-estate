import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image, Dimensions } from 'react-native'
import React from 'react'

const Booking = ({navigation}) => {

    const { width } = Dimensions.get('window');
    const scaleFontSize = (size) => (width / 375) * size;
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
                <Text style={{ color: '#1C665E', fontSize: scaleFontSize(13), fontWeight: '800', marginTop: 5 }}>Patient Details </Text>
                <TouchableOpacity style={{marginVertical:10,height:75,backgroundColor:'white',borderRadius:7,justifyContent:'center'}} onPress={()=>{
navigation.navigate('booking')
                }}>
                <View style={{justifyContent:'center'}}>
                <Image style={{ width: 30, height: 30,alignSelf:'center' }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/addpatient.png')}></Image>   
                <Text style={{ color: 'black',marginVertical:7 ,fontSize: scaleFontSize(13), fontWeight: '800', textAlign: 'center' }}>Add Pateint</Text>
                </View>
                </TouchableOpacity>
                <Text style={{ color: '#1C665E', fontSize: scaleFontSize(13), fontWeight: '800', marginVertical: 10 }}>Payment Details </Text>
                <View style={{height:115,backgroundColor:'white',paddingHorizontal:15,paddingVertical:10,borderRadius:10}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{ color: 'black',marginVertical:7 ,fontSize: scaleFontSize(13), fontWeight: '800', textAlign: 'center' }}>Consultation Fee</Text>
                 <Text style={{ color: 'black',marginVertical:7 ,fontSize: scaleFontSize(13), fontWeight: '400', textAlign: 'center' }}>350/</Text>
                    </View>  
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{ color: 'black',marginVertical:7 ,fontSize: scaleFontSize(13), fontWeight: '800', textAlign: 'center' }}>Booking Charge</Text>
                 <Text style={{ color: 'black',marginVertical:7 ,fontSize: scaleFontSize(13), fontWeight: '400', textAlign: 'center' }}>350/</Text>
                    </View> 
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{ color: 'black',marginVertical:7 ,fontSize: scaleFontSize(13), fontWeight: '800', textAlign: 'center' }}>Hospital Charge</Text>
                 <Text style={{ color: 'black',marginVertical:7 ,fontSize: scaleFontSize(13), fontWeight: '400', textAlign: 'center' }}>350/</Text>
                    </View>  
                </View>
                <TouchableOpacity style={{left:20,right:20,bottom:20,position:'absolute',height:45,backgroundColor:'#1E5A84',borderRadius:7,justifyContent:'center'}} onPress={()=>{
navigation.navigate('bookSuccess')
                }}>
                <View style={{justifyContent:'center'}}>
                <Text style={{ color: 'white', fontSize: scaleFontSize(13), fontWeight: '800', textAlign: 'center' }}>Proceed</Text>
                </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
  )
}

export default Booking

const styles = StyleSheet.create({})