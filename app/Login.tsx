import { SafeAreaView, StyleSheet, Text, View ,Image,TextInput} from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#F0F3F5'}}>
    <View style={{flex:1,paddingHorizontal:20}}>
     <View style={{justifyContent:'center',alignItems:'center'}}>
     <Image style={{ width: 120, height: 80,marginTop:40,marginBottom:15}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/logo.png')}></Image>
        </View>   
        <Text style={{color:'#174666',fontSize:20,fontWeight:'800'}}>Sign In</Text>
        <View style={{height:45,borderColor:'#174666',borderWidth:1,borderRadius:13,paddingHorizontal:8,marginTop:20}}>
        <TextInput style={{height:45,}} placeholder='Enter your email' placeholderTextColor={'#174666'}></TextInput>
        </View>
        <View style={{height:45,borderColor:'#174666',borderWidth:1,borderRadius:13,paddingHorizontal:8,marginTop:10}}>
        <TextInput style={{height:45,}} placeholder='Enter your passowrd' placeholderTextColor={'#174666'} secureTextEntry={true}></TextInput>
        </View>
        <Text style={{color:'#174666',fontSize:14,fontWeight:'500',textAlign:'right',marginVertical:12}}>Forget Password?</Text>
        <View style={{height:45,backgroundColor:'#1E5A84',borderRadius:13,paddingHorizontal:8,marginTop:10}}>
        <Text style={{color:'white',fontSize:14,fontWeight:'500',textAlign:'center',marginVertical:12}}>Sign In</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',bottom:40,left:40,right:40,position:'absolute'}}>
        <Text style={{color:'#174666',fontSize:14,fontWeight:'500'}}>Don't have an account? </Text>
        <Text onPress={()=>{
           navigation.navigate('register') 
        }} style={{color:'#174666',fontSize:14,fontWeight:'800'}}>Register</Text>

        </View>
    </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})