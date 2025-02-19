import { SafeAreaView, StyleSheet, Text, TextInput, View,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Register = ({navigation}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [cpassword, setCPassword] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
      // Basic validation check
      if (username === '') {
        alert('Please enter your user name');
        return;
      }
      if (email === '') {
        alert('Please enter your email');
        return;
      }

      if (isValidEmail(email)) {
        alert('Please enter valid email');
        return; 
      }
      if (password === '') {
        alert('Please enter your password');
        return;
      }
      if (password.length < 8) {
        alert('Please enter at least 8 characters for your password');
        return;
      }
      if (cpassword === '') {
        alert('Please enter confirm password');
        return;
      }
      if (password != cpassword) {
        alert('Confirm password must match with password');
        return;
      }
      // Example of successful login (replace this with actual authentication logic)
      
    };

    const handleChangeText = (text) => {
      setUsername(text);  // Update state with the new text
    };
    const handleChangeText1 = (text) => {
      setEmail(text);  // Update state with the new text
    };
    const handleChangeText2 = (text) => {
      setPassword(text);  // Update state with the new text
    };
    const handleChangeText3 = (text) => {
      setCPassword(text);  // Update state with the new text
    };

  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#F0F3F5'}}>
    <View style={{flex:1,paddingHorizontal:20}}>
     <View style={{justifyContent:'center',alignItems:'center'}}>
     <Image style={{ width: 120, height: 80,marginTop:20,marginBottom:5}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/logo.png')}></Image>
        </View>   
        <Text style={{color:'#174666',fontSize:20,fontWeight:'800'}}>Sign Up</Text>
        <View style={{height:45,borderColor:'#174666',borderWidth:1,borderRadius:13,paddingHorizontal:8,marginTop:20}}>
        <TextInput style={{height:45,}} placeholder='Enter your user name' placeholderTextColor={'#174666'} value={username}                   // Controlled input
        onChangeText={handleChangeText}></TextInput>
        </View>
        <View style={{height:45,borderColor:'#174666',borderWidth:1,borderRadius:13,paddingHorizontal:8,marginTop:10}}>
        <TextInput style={{height:45,}} placeholder='Enter your email' placeholderTextColor={'#174666'} value={email}                   // Controlled input
        onChangeText={handleChangeText1} ></TextInput>
        </View>
        <View style={{height:45,borderColor:'#174666',borderWidth:1,borderRadius:13,paddingHorizontal:8,marginTop:10}}>
        <TextInput  style={{height:45,}} placeholder='Enter your passowrd' placeholderTextColor={'#174666'} secureTextEntry={true} value={password}                   // Controlled input
        onChangeText={handleChangeText2}></TextInput>
        </View>
        <View style={{height:45,borderColor:'#174666',borderWidth:1,borderRadius:13,paddingHorizontal:8,marginTop:10}}>
        <TextInput style={{height:45,}} placeholder='Re-Enter your passowrd' placeholderTextColor={'#174666'} secureTextEntry={true} value={cpassword}                   // Controlled input
        onChangeText={handleChangeText3}></TextInput>
        </View>
        <TouchableOpacity onPress={handleLogin}>
        <View style={{height:45,backgroundColor:'#1E5A84',borderRadius:13,paddingHorizontal:8,marginTop:20}}>
        <Text style={{color:'white',fontSize:14,fontWeight:'500',textAlign:'center',marginVertical:12}}>Sign Up</Text>
        </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',bottom:40,left:40,right:40,position:'absolute'}}>
        <Text style={{color:'#174666',fontSize:14,fontWeight:'500'}}>Already have an account? </Text>
        <Text onPress={()=>{
           navigation.goBack() 
        }} style={{color:'#174666',fontSize:14,fontWeight:'800'}}>Login</Text>
        </View>
    </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({})