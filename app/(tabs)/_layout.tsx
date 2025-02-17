import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '.';
import TabTwoScreen from './explore';
import Profile from './profileView';
import AllSpeciality from './AllSpeciality';
import AllDoctor from './AllDoctor';
import AllHospital from './AllHospital';
import HospitalDetails from './HospitalDetails';
import DoctorDetails from './DoctorDetails';
import Appointment from './Appointment';
import Booking from './Booking';
import BookingSuccess from './BookingSuccess';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Speciality" component={AllSpeciality} options={{headerShown:false}}/>
        <Stack.Screen name="Hospital" component={AllHospital} options={{headerShown:false}}/>
        <Stack.Screen name="Doctor" component={AllDoctor} options={{headerShown:false}}/>
        <Stack.Screen name="HDetail" component={HospitalDetails} options={{headerShown:false}}/>
        <Stack.Screen name="DDetail" component={DoctorDetails} options={{headerShown:false}}/>
        <Stack.Screen name="appointment" component={Appointment} options={{headerShown:false}}/>
        <Stack.Screen name="booking" component={Booking} options={{headerShown:false}}/>
        <Stack.Screen name="bookSuccess" component={BookingSuccess} options={{headerShown:false}}/>

        
      </Stack.Navigator>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
          height: 60,
        },
        tabBarActiveTintColor: '#fff',
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Appiontment" component={TabTwoScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
