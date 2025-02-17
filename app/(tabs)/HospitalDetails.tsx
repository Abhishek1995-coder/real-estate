import { StyleSheet, Text, TextInput, TouchableOpacity, View,Image,Linking ,SafeAreaView, Platform, Dimensions, ScrollView } from 'react-native'
import React from 'react'

const HospitalDetails = ({navigation}) => {

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
    <Text style={{ color: '#174666', fontSize: 18, fontWeight: '800',marginLeft:30 }}>Apollo international hospital</Text>
            </View>
        </View>
        <ScrollView>
        <View style={{backgroundColor:'white',borderRadius:12,}} >
              {/* <Image style={{width:160,height:160,marginTop:10}} source=></Image> */}
              <Image style={{height:160,marginTop:10,borderRadius:8,width:'95%',alignSelf:'center'}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/hospital.png')}></Image>
              <Text style={{color:'black',fontSize:scaleFontSize(15),fontWeight:'500',marginTop:5,paddingHorizontal:15}}>Apollo International Hospital</Text>
              <Text style={{color:'black',fontSize:scaleFontSize(13),fontWeight:'400',marginTop:3,paddingHorizontal:15}}>Multi super specialty hospital</Text>
              <View style={{flexDirection:'row',marginTop:3,paddingHorizontal:15}}>
              <Image style={{width:12,height:12,marginRight:5,marginTop:4}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/location.png')}></Image>
              <Text style={{color:'#333333',fontSize:scaleFontSize(13),fontWeight:'400'}}>west ham, north England</Text>
              </View>
              <View style={{flexDirection:'row',marginBottom:8,marginTop:3,paddingHorizontal:15}}>
              <Image style={{width:12,height:12,marginRight:8,marginTop:3}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/distance.png')}></Image>
              <Text style={{color:'#333333',fontSize:scaleFontSize(13),fontWeight:'400'}}>5 km away from your location</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',marginVertical:15}}>
  <TouchableOpacity style={{flex:1}} onPress={()=>{
    navigation.navigate('Doctor')
  }}>
  <View  style={{height:40,backgroundColor:'#2A7FBA',marginRight:10,justifyContent:'center',borderRadius:10}}>
  <Text style={{color:'white',fontSize:scaleFontSize(15),fontWeight:'600',textAlign:'center'}}>View all doctors</Text>
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
  <Text style={{color:'#174666',fontSize:scaleFontSize(15),fontWeight:'600',}}>About Hospital</Text>
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
              <Text style={{color:'black',fontSize:scaleFontSize(10),fontWeight:'400',marginTop:5*2,marginRight:4}}>12/12/2023 </Text>
              </View>
              <Text style={{color:'black',fontSize:scaleFontSize(10),fontWeight:'400',marginVertical:5}}>responsible for diagnosing, examining, diseases, disorders, and illnesses of patients. </Text>

            </View>
          ))
        }
      </ScrollView>
    </View>

        </ScrollView>
        
        </View>
        </SafeAreaView>
  )
}

export default HospitalDetails

const styles = StyleSheet.create({})