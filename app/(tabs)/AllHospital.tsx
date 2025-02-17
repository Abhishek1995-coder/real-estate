import { SafeAreaView, StyleSheet, Text, View,Image, TextInput, FlatList, Dimensions, Platform, TouchableOpacity } from 'react-native'
import React from 'react'

const AllHospital = ({ navigation }) => {
    const { width } = Dimensions.get('window');
    const scaleFontSize = (size) => (width / 375) * size;
    const data = [
        { key: 'Devin' },
        { key: 'Dan' },
        { key: 'Dominic' },
        { key: 'Jackson' },
        { key: 'James' },
        { key: 'Joel' },
        { key: 'John' },
        { key: 'Jillian' },
        { key: 'Jimmy' },
        { key: 'Julie' },
    ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F3F5' }}>
    <View style={{ flex: 1, backgroundColor: '#F0F3F5', paddingHorizontal: 10, marginTop: Platform.OS == 'ios' ? 10 : 35 }} >
        <View style={{ height: 100 }}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
             <TouchableOpacity onPress={()=>{
                navigation.goBack()
             }}>
             <Image style={{ width: 30, height: 30, marginRight: 12 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/left.png')}></Image>
                </TouchableOpacity>   
            <Text style={{ color: '#174666', fontSize: 18, fontWeight: '800',marginLeft:30 }}>All Hospitals</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 15, backgroundColor: 'white', height: 50, borderRadius: 13, alignItems: 'center', marginVertical: 12 }}>
                <Image style={{ width: 20, height: 20, marginRight: 12 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/search.png')}></Image>
                <TextInput style={{ color: 'black',flex:1 }} placeholder='Search here...' placeholderTextColor={'black'}></TextInput>
            </View>
        </View>
        <FlatList showsVerticalScrollIndicator={false} data={data}
            renderItem={({ item }) =>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('HDetail')
            }}>
<View style={{ backgroundColor: 'white', borderRadius: 12, marginBottom: 10, paddingTop: 8 }} id={item.key}>
                    <View style={{ marginLeft: 13, marginBottom: 7 }}>
                        <View style={{ }}>
                            <Image style={{ height: 180, width: '100%',borderRadius:7 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/doctor.png')}></Image>
                            <View style={{marginVertical:3}}>
                                <Text style={{ color: '#1C665E', fontSize: scaleFontSize(15), fontWeight: '800', marginTop: 5 }}>Apollo international hospital</Text>
                                <Text style={{ color: '#1C665E', fontSize: scaleFontSize(13), fontWeight: '700', marginTop: 3 }}>multi super specialty hospital</Text>
                                <View style={{ flexDirection: 'row', marginTop: 9 }}>
                                <Image style={{width:15,height:15,marginRight:4}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/location.png')}></Image>
                                    <Text style={{ color: '#333333', fontSize: scaleFontSize(13), fontWeight: '600' }}>Apollo hospital, west ham</Text>
                                </View>                               
                                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Image style={{width:15,height:15,marginRight:4,marginTop:3}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/distance.png')}></Image>
                                    <Text style={{ color: '#333333', fontSize: scaleFontSize(13), fontWeight: '600' }}>5km away from your location</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                <Image style={{width:15,height:15,marginRight:4}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/doc.png')}></Image>
                                    <Text style={{ color: '#2A7FBA', fontSize: scaleFontSize(13), fontWeight: '500' }}>23 doctors</Text>
                                </View>  
                                <View style={{ flexDirection: 'row', marginTop: 5,marginBottom:3 }}>
                                <Image style={{width:15,height:15,marginRight:4}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/spec.png')}></Image>
                                    <Text style={{ color: '#2A7FBA', fontSize: scaleFontSize(13), fontWeight: '500' }}>13 specialties</Text>
                                </View>  
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            }
            keyExtractor={(item) => item.key} />
    </View>
</SafeAreaView>
  )
}

export default AllHospital

const styles = StyleSheet.create({})