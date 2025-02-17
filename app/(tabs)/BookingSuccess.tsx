import { StyleSheet, Text, View,Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const BookingSuccess = ({navigation}) => {

    const { width } = Dimensions.get('window');
    const scaleFontSize = (size) => (width / 375) * size;
    
  return (
    <View style={{alignSelf:'center',justifyContent:'center',flex:1}}>
        <View style={{alignSelf:'center',justifyContent:'center'}}>
        <Image style={{ width: 80, height: 80 ,marginBottom:30}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/success.png')}></Image>
        </View>
        <Text style={{ color: 'black', fontSize: scaleFontSize(15), fontWeight: '800', textAlign: 'center',marginBottom:10 }}>Thank You</Text>
        <Text style={{ color: 'black', fontSize: scaleFontSize(15), fontWeight: '400', textAlign: 'center' }}>your booking is successfully completed</Text>
        <TouchableOpacity style={{left:20,right:20,bottom:20,position:'absolute',height:45,backgroundColor:'#1E5A84',borderRadius:7,justifyContent:'center'}} onPress={()=>{
navigation.popToTop();
             }}>
                <View style={{justifyContent:'center'}}>
                <Text style={{ color: 'white', fontSize: scaleFontSize(13), fontWeight: '800', textAlign: 'center' }}>Back To Home</Text>
                </View>
                </TouchableOpacity>
    </View>
  )
}

export default BookingSuccess

const styles = StyleSheet.create({})