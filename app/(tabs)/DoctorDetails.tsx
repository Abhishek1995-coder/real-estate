import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image, Dimensions,Linking, ScrollView } from 'react-native'
import React from 'react'

const DoctorDetails = ({navigation}) => {
    const arryType = [{'id':'1','title':'general','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/general.png')},{'id':'2','title':'nephrologist','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/nephro.png')},{'id':'3','title':'cardiology','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/cardio.png')},{'id':'4','title':'neurologist','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/neuro.png')}]
    const { width } = Dimensions.get('window');
    const scaleFontSize = (size) => (width / 375) * size;
    const phoneNumber = "tel:8360464742"; // Only the dial pad opens, no phone number is pre-filled

  const openDialPad = () => {
    Linking.openURL(phoneNumber)
      .catch(err => console.error("Failed to open dialer", err));
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F3F5' }}>
    <View style={{ flex: 1, backgroundColor: '#F0F3F5', paddingHorizontal: 10, marginTop: Platform.OS == 'ios' ? 10 : 35 }} >
        <View style={{ height: 50 }}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
     <TouchableOpacity onPress={()=>{
        navigation.goBack()
     }}>
     <Image style={{ width: 30, height: 30 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/left.png')}></Image>
        </TouchableOpacity>   
    <Text style={{ color: '#174666', fontSize: 18, fontWeight: '800',marginLeft:30 }}>Dr Denies Martine</Text>
            </View>
        </View>
        <View style={{ backgroundColor: 'white', borderRadius: 12,  paddingTop: 8,marginBottom:8 }} >
                            <View style={{ marginLeft: 13, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ width: 130, height: 130, marginRight: 10,borderRadius:7 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/doctor.png')}></Image>
                                    <View style={{marginBottom:9}}>
                                        <Text style={{ color: '#1C665E', fontSize: scaleFontSize(13), fontWeight: '600', marginTop: 5 }}>Dr Denies Martine</Text>
                                        <Text style={{ color: '#1C665E', fontSize: scaleFontSize(12), fontWeight: '600', marginTop: 3 }}>MBBS, MD</Text>
                                        <Text style={{ color: '#1E5A84', fontSize: scaleFontSize(12), fontWeight: '500', marginTop: 3 }}>Cardiologist</Text>
                                        <Text style={{ color: '#333333', fontSize: scaleFontSize(12), fontWeight: '500', marginTop: 3 }}>42 year experience</Text>
                                        <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                        <Image style={{width:12,height:12,marginRight:4,marginTop:5}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/location.png')}></Image>
                                            <Text style={{ color: '#333333', fontSize: scaleFontSize(12), fontWeight: '500',marginTop:2 }}>Apollo hospital, west ham</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', height: 28, marginRight: 4 }}>
                                            <Text style={{ color: '#2A7FBA', fontSize: scaleFontSize(12), fontWeight: '600', marginVertical: 2 }}>Consulting Fee</Text>
                                            <Text numberOfLines={0} style={{ color: '#2A7FBA', fontSize: scaleFontSize(12), fontWeight: '400', marginVertical: 3,marginLeft:10 }}>$500</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white', borderRadius: 12,  paddingTop: 3 }} >
                            <View style={{ marginLeft: 13, }}>
                                
                                    <View style={{marginBottom:9}}>
                                        <Text style={{ color: '#1C665E', fontSize: scaleFontSize(13), fontWeight: '600', marginTop: 5 }}>Clinic Visit</Text>
                                        <Text style={{ color: '#1C665E', fontSize: scaleFontSize(12), fontWeight: '600', marginTop: 3 }}>Clinic Address :</Text>
                                        <Text style={{ color: '#1E5A84', fontSize: scaleFontSize(12), fontWeight: '500', marginTop: 3 }}>serum clinic, rose dam,
near police station, west ham</Text>
                                        <Text style={{ color: 'gray', fontSize: scaleFontSize(12), fontWeight: '500', marginTop: 3 }}>free consult follow-up 7 days post consultation</Text>
                                       
                                    </View>
                                
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginVertical:15}}>
  <TouchableOpacity style={{flex:1}} onPress={()=>{
    navigation.navigate('appointment')
  }}>
  <View  style={{height:40,backgroundColor:'#2A7FBA',marginRight:10,justifyContent:'center',borderRadius:10}}>
  <Text style={{color:'white',fontSize:scaleFontSize(15),fontWeight:'600',textAlign:'center'}}>Book</Text>
</View>
    </TouchableOpacity>  

    <TouchableOpacity style={{flex:1}} onPress={()=>{
      openDialPad()
  }}>
 <View style={{height:40,backgroundColor: '#2A7FBA',justifyContent:'center',borderRadius:10}}>
<Text style={{color:'white',fontSize:scaleFontSize(15),fontWeight:'600',textAlign:'center',}}>Call</Text>

  </View>
    </TouchableOpacity>  
  

  </View>
  <Text style={{color:'#174666',fontSize:scaleFontSize(15),fontWeight:'600',}}>About Doctor</Text>
  <Text style={{color:'#174666',fontSize:scaleFontSize(13),fontWeight:'400',}}>Lorem ipsum dolor sit amet. Et architecto sequi sed aperiam autem ea consequuntur vero ut omnis sint qui voluptate quidem in deserunt recusandae.
</Text>

<Text style={{color:'#174666',fontSize:scaleFontSize(15),fontWeight:'600',marginVertical:5}}>Reviews</Text>
<View style={{flexDirection:'row'}}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {
          arryType.map((item)=>(
            <View style={{marginRight:6,backgroundColor:'white',width:220,alignItems:'center',borderRadius:12,}} id={item.id}>
              {/* <Image style={{width:160,height:160,marginTop:10}} source=></Image> */}
              <View style={{flexDirection:'row',justifyContent:'space-between',width:220}}>
              <Image style={{width:40,height:40,marginTop:10,borderRadius:20,marginLeft:5}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/hospital.png')}></Image>
              <Text style={{color:'black',fontSize:scaleFontSize(12),fontWeight:'500',marginTop:5*2}}>sam curren </Text>
              <Text style={{color:'black',fontSize:scaleFontSize(10),fontWeight:'400',marginTop:13,marginRight:4}}>12/12/2023 </Text>
              </View>
              <Text style={{color:'black',fontSize:scaleFontSize(10),fontWeight:'400',marginVertical:5}}>responsible for diagnosing, examining, diseases, disorders, and illnesses of patients. </Text>

            </View>
          ))
        }
      </ScrollView>
    </View>


        </View>
        </SafeAreaView>
  )
}

export default DoctorDetails

const styles = StyleSheet.create({})