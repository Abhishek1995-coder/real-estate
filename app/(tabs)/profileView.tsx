import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import React from 'react'

const Profile = () => {

  const { width } = Dimensions.get('window');
  const scaleFontSize = (size) => (width / 375) * size;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F3F5' }}>
      <View style={{ flex: 1, backgroundColor: '#F0F3F5', paddingHorizontal: 10, marginTop: Platform.OS == 'ios' ? 10 : 35 }} >
        <View style={{ height: 60 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <Text style={{ color: '#174666', fontSize: 18, fontWeight: '800', marginLeft: 30 }}>Profile</Text>
          </View>


        </View>
        <View style={{ flexDirection: 'row', }}>
          <Image style={{ height: 80, borderRadius: 40, width: 80, alignSelf: 'center' }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/hospital.png')}></Image>
          <View>
            <Text style={{ color: '#174666', fontSize: 18, fontWeight: '800', marginLeft: 30 }}>Christopher</Text>
            <Text style={{ color: '#174666', fontSize: 15, fontWeight: '400', marginLeft: 30, marginVertical: 4 }}>+41 9879857854</Text>
            <Text style={{ color: '#174666', fontSize: 15, fontWeight: '400', marginLeft: 30 }}>west ham</Text>

          </View>
        </View>
        <View style={{ height: 45, marginTop: 30, backgroundColor: 'white', justifyContent: 'center',borderRadius:9 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#174666', fontSize: scaleFontSize(14), fontWeight: '800', marginLeft: 30 }}>Edit Profile</Text>
            <Image style={{ width: 14, height: 14, marginRight: 15, marginTop: 3 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/rightarrow.png')}></Image>
          </View>
        </View>
        <View style={{ height: 40, marginTop: 10, backgroundColor: 'white', justifyContent: 'center' ,borderRadius:9}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#174666', fontSize: scaleFontSize(14), fontWeight: '800', marginLeft: 30 }}>Notifications</Text>
            <Image style={{ width: 14, height: 14, marginRight: 15, marginTop: 3 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/rightarrow.png')}></Image>
          </View>
        </View>
        <View style={{ height: 40, marginTop: 10, backgroundColor: 'white', justifyContent: 'center' ,borderRadius:9}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#174666', fontSize: scaleFontSize(14), fontWeight: '800', marginLeft: 30 }}>Change Location</Text>
            <Image style={{ width: 14, height: 14, marginRight: 15, marginTop: 3 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/rightarrow.png')}></Image>
          </View>
        </View>
        <View style={{ height: 40, marginTop: 10, backgroundColor: 'white', justifyContent: 'center',borderRadius:9 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#174666', fontSize: scaleFontSize(14), fontWeight: '800', marginLeft: 30 }}>FAQs</Text>
            <Image style={{ width: 14, height: 14, marginRight: 15, marginTop: 3 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/rightarrow.png')}></Image>
          </View>
        </View>
        <View style={{ height: 40, marginTop: 10, backgroundColor: 'white', justifyContent: 'center',borderRadius:9 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#174666', fontSize: scaleFontSize(14), fontWeight: '800', marginLeft: 30 }}>About Us</Text>
            <Image style={{ width: 14, height: 14, marginRight: 15, marginTop: 3 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/rightarrow.png')}></Image>
          </View>
        </View>
        <View style={{ height: 40, marginTop: 10, backgroundColor: 'white', justifyContent: 'center',borderRadius:9 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#174666', fontSize: scaleFontSize(14), fontWeight: '800', marginLeft: 30 }}>Logout</Text>
            <Image style={{ width: 20, height: 20, marginRight: 15, }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/logout.png')}></Image>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})