import { useEffect, useState } from 'react';
import { Image, StyleSheet, Platform, SafeAreaView, View ,Text, TextInput, ScrollView, Dimensions, FlatList, TouchableOpacity} from 'react-native';


export default function HomeScreen({ navigation }) {

  const arryType = [{'id':'1','title':'general','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/general.png')},{'id':'2','title':'nephrologist','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/nephro.png')},{'id':'3','title':'cardiology','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/cardio.png')},{'id':'4','title':'neurologist','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/neuro.png')}]
  const { width } = Dimensions.get('window');
  const scaleFontSize = (size) => (width / 375) * size;
  
  const renderItem = ({ item }) => (
    <View >
      <Text>{item.name}</Text>
    </View>
  );




  return (
   <SafeAreaView  style={{flex:1,backgroundColor:'#F0F3F5'}}>
    <View style={{flex:1,backgroundColor:'#F0F3F5',paddingHorizontal:10}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:Platform.OS == 'ios' ? 10 : 45,height:55}}>
      <View style={{flexDirection:'row'}}>
      <Image style={{width:45,height:45}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/profile.png')}></Image>
      <View style={{marginLeft:15}}>
      <Text style={{color:'#174666',fontSize:14,fontWeight:'600'}}>Hi, Christopher</Text>
<Text style={{color:'#174666',fontSize:13,fontWeight:'400'}}>good morning</Text>
      </View>
      </View>
      
      <View style={{flexDirection:'row'}}>
      <View style={{marginRight:15}}>
      <Text style={{color:'#174666',fontSize:13,fontWeight:'400'}}>Your location</Text>
<Text style={{color:'#174666',fontSize:14,fontWeight:'600'}}>west ham</Text>
      </View>
      <Image style={{width:30,height:30}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/bell.png')}></Image>
      </View>
     
    </View>
<ScrollView  showsVerticalScrollIndicator={false} style={{flex:1}}>

<View style={{flexDirection:'row',paddingHorizontal:15,backgroundColor:'white',height:50,borderRadius:13,alignItems:'center',marginVertical:12}}>
      <Image style={{width:30,height:30,marginRight:12}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/search.png')}></Image>
      <TextInput style={{color:'black'}} placeholder='Search here...' placeholderTextColor={'black'}></TextInput>
    </View>
   <Image style={{height:180,width:Dimensions.get('screen').width,borderRadius:12}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/banner.png')}></Image>
   <View style={{justifyContent:'space-between',flexDirection:'row',marginVertical:15}}>
   <Text style={{color:'black',fontSize:15,fontWeight:'600'}}>Top Specialties</Text>
              <Text onPress={()=>{
               navigation.navigate('Speciality') 
              }} style={{color:'#1E5A84',fontSize:15,fontWeight:'400'}}>View All</Text>
   </View>
  
    <View style={{height:205,flexDirection:'row'}}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {
          arryType.map((item)=>(
            <TouchableOpacity onPress={()=>{
              navigation.navigate('Doctor')
            }}>
            <View style={{marginRight:6,backgroundColor:'white',width:180,alignItems:'center',borderRadius:12}} id={item.id}>
              <Image style={{width:160,height:160,marginTop:10}} source={item.image}></Image>
              <Text style={{color:'#1E5A84',fontSize:13,fontWeight:'600',marginVertical:5}}>{item.title.toUpperCase()}</Text>
            </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
    <View style={{justifyContent:'space-between',flexDirection:'row',marginVertical:15}}>
   <Text style={{color:'black',fontSize:15,fontWeight:'600'}}>Top Doctors</Text>
              <Text onPress={()=>{
               navigation.navigate('Doctor') 
              }} style={{color:'#1E5A84',fontSize:15,fontWeight:'400'}}>View All</Text>
   </View>
      <ScrollView >
        {
          arryType.map((item)=>(
            <TouchableOpacity onPress={()=>{
              navigation.navigate('DDetail')
            }}>
            <View style={{ backgroundColor: 'white', borderRadius: 12, marginBottom: 10, paddingTop: 8 }} id={item.key}>
                            <View style={{ marginLeft: 13,  }}>
                                <View style={{ flexDirection: 'row' }}>
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
                                        <View style={{ flexDirection: 'row', height: 26, marginRight: 4 }}>
                                            <Text style={{ color: '#2A7FBA', fontSize: scaleFontSize(12), fontWeight: '600', marginVertical: 2 }}>Consulting Fee</Text>
                                            <Text numberOfLines={0} style={{ color: '#2A7FBA', fontSize: scaleFontSize(12), fontWeight: '400', marginVertical: 2,marginLeft:10 }}>$500</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        </TouchableOpacity>
          ))
        }
      </ScrollView>
      <View style={{justifyContent:'space-between',flexDirection:'row',marginVertical:15}}>
   <Text style={{color:'black',fontSize:15,fontWeight:'600'}}>Top Hospitals</Text>
              <Text onPress={()=>{
               navigation.navigate('Hospital') 
              }} style={{color:'#1E5A84',fontSize:15,fontWeight:'400'}}>View All</Text>
   </View>
  
    <View style={{height:295,flexDirection:'row'}}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {
          arryType.map((item)=>(
            <TouchableOpacity onPress={()=>{
              navigation.navigate('HDetail')
            }}>
            <View style={{marginRight:6,backgroundColor:'white',width:220,alignItems:'center',borderRadius:12,height:245,}} id={item.id}>
              {/* <Image style={{width:160,height:160,marginTop:10}} source=></Image> */}
              <Image style={{width:200,height:160,marginTop:10,borderRadius:8}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/hospital.png')}></Image>
              <Text style={{color:'black',fontSize:12,fontWeight:'500',marginTop:5}}>Apollo International Hospital</Text>
              <View style={{flexDirection:'row',marginTop:3}}>
              <Image style={{width:15,height:15,marginRight:5}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/location.png')}></Image>
              <Text style={{color:'#333333',fontSize:10,fontWeight:'400'}}>west ham, north England</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:3}}>
              <Image style={{width:15,height:15,marginRight:5}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/distance.png')}></Image>
              <Text style={{color:'#333333',fontSize:10,fontWeight:'500'}}>5km away from your location</Text>
              </View>
            </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
    
</ScrollView>

    </View>
    
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
