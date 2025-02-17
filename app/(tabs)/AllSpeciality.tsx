import { Dimensions, FlatList, Platform, SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const AllSpeciality = ({navigation}) => {

const { width } = Dimensions.get('window');
// A utility function to scale the font size
const scaleFontSize = (size) => (width / 375) * size; 
const arryType = [{'id':'1','title':'general','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/general.png')},{'id':'2','title':'nephrologist','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/nephro.png')},{'id':'3','title':'cardiology','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/cardio.png')},{'id':'4','title':'neurologist','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/neuro.png')},{'id':'5','title':'Dentist','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/dentist.png')},{'id':'6','title':'Gynecologist','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/gyna.png')},{'id':'7','title':'Pediatrician','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/pedia.png')},{'id':'8','title':'G surgeon','image':require('/Users/mac/Documents/React-Native/myProject/client/assets/images/surgeon.png')}]

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#F0F3F5'}}>
    <View style={{flex:1,backgroundColor:'#F0F3F5',paddingHorizontal:10,marginTop:Platform.OS == 'ios' ? 0 : 35}} >
        <View style={{height:45,flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>{
                navigation.goBack()
             }}>
             <Image style={{ width: 30, height: 30, marginRight: 12 }} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/left.png')}></Image>
                </TouchableOpacity>     
        <Text style={{color:'#174666',fontSize:18,fontWeight:'800'}}>Top Specialties</Text>
        </View>
        <FlatList bounces={false} style={{}} numColumns={2} showsVerticalScrollIndicator={false} data={arryType}
        renderItem={({ item }) =>
        <View style={{marginRight:6,backgroundColor:'white',alignItems:'center',borderRadius:12,marginBottom:5,flex:1}} id={item.id}>
              <Image style={{height:160,marginTop:10,flex:1}} resizeMode={'contain'} source={item.image}></Image>
              <Text style={{color:'#1E5A84',fontSize:scaleFontSize(13),fontWeight:'600',marginVertical:5}}>{item.title.toUpperCase()}</Text>
            </View>
       }
        keyExtractor={(item) => item.id}/>
      </View>
      </SafeAreaView>  
  )
}

export default AllSpeciality

const styles = StyleSheet.create({})