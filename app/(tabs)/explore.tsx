import { useState } from 'react';
import { StyleSheet, Image, Platform, SafeAreaView, View,Text, Dimensions,FlatList,PixelRatio, TouchableOpacity, Alert  } from 'react-native';


export default function TabTwoScreen() {
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

  const[selectItem,setSelectItem] = useState('Actives')

  const pixelHeight = Platform.OS == 'ios' ? 110 : 120 ; // Target height in logical pixels
  const scaledHeight = PixelRatio.get() * pixelHeight;


  const pixelHeight1 = Platform.OS == 'ios' ? 90 : 100 ; // Target height in logical pixels
  const scaledHeight1 = PixelRatio.get() * pixelHeight1;

const { width } = Dimensions.get('window');

// A utility function to scale the font size
const scaleFontSize = (size) => (width / 375) * size; 
const {  height } = Dimensions.get('window');
const showAlert = () => {
  // Show the alert with a title, message, and buttons
  Alert.alert(
    "Alert", // Title of the alert
    "Are you sure want to cancel?", // Message of the alert
    [
      {
        text: "OK", // Text for the cancel button
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel", // Optional style for the cancel button
      },
      {
        text: "Cancel", // Text for the OK button
        onPress: () => console.log(height * 0.25)
        ,
      },
    ],
    { cancelable: false } // You can set cancelable to false to prevent closing the alert by tapping outside
  );
};

  return (
   <SafeAreaView style={{flex:1,backgroundColor:'#F0F3F5'}}>
    <View style={{flex:1,backgroundColor:'#F0F3F5',paddingHorizontal:10,marginTop:Platform.OS == 'ios' ? 10 : 45}} >
    <Text style={{color:'black',fontSize:16,fontWeight:'600',textAlign:'center',marginBottom:15}}>My Appointments</Text>
  <View style={{flexDirection:'row',marginBottom:15}}>
  <TouchableOpacity style={{flex:1}} onPress={()=>{
    setSelectItem('Actives')
  }}>
  <View  style={{height:40,backgroundColor:selectItem === 'Actives' ? '#CF403F' :'white',marginRight:10,justifyContent:'center',borderRadius:5}}>
  <Text style={{color:selectItem === 'Actives' ? 'white' :'black',fontSize:16,fontWeight:'600',textAlign:'center'}}>Actives</Text>
</View>
    </TouchableOpacity>  

    <TouchableOpacity style={{flex:1}} onPress={()=>{
    setSelectItem('Previews')
  }}>
 <View style={{height:40,backgroundColor: selectItem === 'Previews' ? '#CF403F' :'white',justifyContent:'center',borderRadius:5}}>
<Text style={{color:selectItem === 'Previews' ? 'white' :'black',fontSize:16,fontWeight:'600',textAlign:'center',}}>Previews</Text>

  </View>
    </TouchableOpacity>  
  

  </View>
      <FlatList showsVerticalScrollIndicator={false} data={data}
        renderItem={({ item }) =>
         selectItem == 'Previews' ?  <View style={{backgroundColor:'white',borderRadius:12,marginBottom:10,paddingTop:8}} id={item.key}>
         
         <View style={{marginLeft:13}}>
         <Text style={{color:'#1C665E',fontSize:scaleFontSize(13),fontWeight:'600',marginTop:5}}>Dr Denies Martine</Text>
         <Text style={{color:'#1C665E',fontSize:scaleFontSize(12),fontWeight:'600',marginTop:3}}>MBBS, MD</Text>
         <Text style={{color:'#1E5A84',fontSize:scaleFontSize(12),fontWeight:'500',marginTop:3}}>Date:15/02/2026</Text>
         <Text style={{color:'#333333',fontSize:scaleFontSize(12),fontWeight:'500',marginTop:3}}>(3 days Ago)</Text>
         <View style={{flexDirection:'row',marginTop:3}}>
         <Text style={{color:'#1E5A84',fontSize:scaleFontSize(12),fontWeight:'500'}}>Time/Token: </Text>
         <Text style={{color:'#333333',fontSize:scaleFontSize(12),fontWeight:'500'}}>08:30 AM</Text>
         </View>
         <View style={{flexDirection:'row',height:21,marginRight:4}}>
         <Text style={{color:'#1E5A84',fontSize:scaleFontSize(12),fontWeight:'500',marginVertical:3}}>Place: </Text>
         <Text numberOfLines={0} style={{color:'#1E5A84',fontSize:scaleFontSize(12),fontWeight:'500',marginTop:3,}}>serum clinic,</Text>
         </View>
         </View>

         <View style={{flexDirection:'row',backgroundColor:'#288247',justifyContent:'center',alignItems:'center',height:35,borderRadius:6,marginVertical:13,marginHorizontal:10}}>
         <Text style={{color:'#FFFFFF',fontSize:scaleFontSize(13),fontWeight:'600',}}>Add  Review</Text>
 
         </View>
        
       </View> :

        <View style={{backgroundColor:'white',borderRadius:12,marginBottom:10,paddingTop:8}} id={item.key}>
        <View style={{flexDirection:'row',}}>
        <Image style={{width:130,height:110,marginRight:15,marginTop:2,borderRadius:12,marginLeft:9}} source={require('/Users/mac/Documents/React-Native/myProject/client/assets/images/hospital.png')}></Image>
        <View>
        <Text style={{color:'#1C665E',fontSize:scaleFontSize(13),fontWeight:'600',marginTop:5}}>Dr Denies Martine</Text>
        <Text style={{color:'#1C665E',fontSize:scaleFontSize(12),fontWeight:'600',marginTop:3}}>MBBS, MD</Text>
        <Text style={{color:'#1E5A84',fontSize:scaleFontSize(12),fontWeight:'500',marginTop:3}}>Date:15/02/2026</Text>
        <Text style={{color:'#333333',fontSize:scaleFontSize(12),fontWeight:'500',marginTop:3}}>(2 days remaining)</Text>
        <View style={{flexDirection:'row',marginTop:3}}>
        <Text style={{color:'#1E5A84',fontSize:scaleFontSize(12),fontWeight:'500'}}>Time/Token: </Text>
        <Text style={{color:'#333333',fontSize:scaleFontSize(12),fontWeight:'500'}}>08:30 AM</Text>
        </View>
        <View style={{flexDirection:'row',height:21,marginRight:4}}>
        <Text style={{color:'#1E5A84',fontSize:scaleFontSize(12),fontWeight:'500',marginVertical:3}}>Place: </Text>
        <Text numberOfLines={0} style={{color:'#1E5A84',fontSize:scaleFontSize(12),fontWeight:'500',marginTop:3,}}>serum clinic,</Text>
        </View>
        </View>
        </View>
        <View style={{flexDirection:'row',backgroundColor:'#288247',justifyContent:'center',alignItems:'center',height:35,borderRadius:5,marginTop:13,marginHorizontal:10}}>
        <Text style={{color:'#FFFFFF',fontSize:scaleFontSize(13),fontWeight:'600',}}>Reschedule</Text>

        </View>
        <TouchableOpacity style={{flex:1}} onPress={()=>{
    showAlert()
  }}>
<View style={{flexDirection:'row',backgroundColor:'#CF403F',height:35,borderRadius:5,marginVertical:7,marginHorizontal:10,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'#FFFFFF',fontSize:scaleFontSize(13),fontWeight:'600'}}>Cancel</Text>
        </View>
  </TouchableOpacity>
        
      </View>
        
       }
        keyExtractor={(item) => item.key}/>
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
