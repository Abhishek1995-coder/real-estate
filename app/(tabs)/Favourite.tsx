import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image,TextInput, FlatList, Platform, Dimensions } from 'react-native'
import React from 'react'

const Favourite = ({navigation}) => {
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
       
    <Text style={{ color: '#174666', fontSize: 18, fontWeight: '800',marginLeft:30 }}>Favourite</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 15, backgroundColor: 'white', height: 50, borderRadius: 13, alignItems: 'center', marginVertical: 12 }}>
                <Image style={{ width: 20, height: 20, marginRight: 12 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/search.png')}></Image>
                <TextInput style={{ color: 'black',flex:1 }} placeholder='Search here...' placeholderTextColor={'black'}></TextInput>
            </View>

        </View>
        <FlatList showsVerticalScrollIndicator={false} data={data}
            renderItem={({ item }) =>
            <TouchableOpacity activeOpacity={1} onPress={()=>{
            }}>
                <View style={{ backgroundColor: 'white', borderRadius: 12, marginBottom: 5, paddingTop: 8 }} id={item.key}>
                    <View style={{ marginLeft: 13,  }}>
                        <View style={{ flexDirection: 'row',justifyContent:'space-between',paddingHorizontal:15 }}>
                            <Image style={{ width: 130, height: 130, marginRight: 10,borderRadius:7 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/doctor.png')}></Image>
                            <View style={{marginBottom:9}}>
                                <Text style={{ color: '#1C665E', fontSize: scaleFontSize(13), fontWeight: '600', marginTop: 5 }}>Dr Denies Martine</Text>
                                <Text style={{ color: '#1C665E', fontSize: scaleFontSize(12), fontWeight: '600', marginTop: 3 }}>MBBS, MD</Text>
                                <Text style={{ color: '#1E5A84', fontSize: scaleFontSize(12), fontWeight: '500', marginTop: 3 }}>Cardiologist</Text>
                                <Text style={{ color: '#333333', fontSize: scaleFontSize(12), fontWeight: '500', marginTop: 3 }}>42 year experience</Text>
                                <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                <Image style={{width:10,height:10,marginRight:4,marginTop:3}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/location.png')}></Image>
                                    <Text style={{ color: '#333333', fontSize: scaleFontSize(12), fontWeight: '500' }}>Apollo hospital, west ham</Text>
                                </View>
                                <View style={{ flexDirection: 'row', height: 24, marginRight: 4 }}>
                                    <Text style={{ color: '#2A7FBA', fontSize: scaleFontSize(12), fontWeight: '500', marginVertical: 3 }}>Consulting Fee</Text>
                                    <Text numberOfLines={0} style={{ color: '#2A7FBA', fontSize: scaleFontSize(12), fontWeight: '400', marginVertical: 3,marginLeft:10 }}>$500</Text>
                                </View>
                            </View>
                            <Image style={{ width: 25, height: 25, marginLeft: 10,borderRadius:7 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/heart.png')}></Image>

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

export default Favourite

const styles = StyleSheet.create({})