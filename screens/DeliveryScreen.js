import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather'


export default function DeliveryScreen() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();
  return (
    <View className="flex-1">
    {/* map view */}
      <MapView
        initialRegion={{
        latitude: restaurant.lng,
         longitude: restaurant.lat,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
        }}
        className="flex-1"
        mapType='relief'
        >
            <Marker coordinate={{
                latitude: restaurant.lng,
                longitude: restaurant.lat,
            }}
            title={restaurant.name}
            description={restaurant.description}
            pinColor={themeColors.bgColor(1)}
            />
        </MapView>
        <View className="rounded-t-3xl -mt-12 bg-white relative">
            <View className="flex-row justify-between px-5 pt-10">
                <View>
                    <Text className="text-lg text-gray-700 font-semibold">
                        Estimated Arrival
                    </Text>
                    <Text className="text-3xl text-gray-700 font-extrabold">
                        20-30 Minutes
                    </Text>
                    <Text className="mt-2 text-gray-700 font-semibold">
                        Your order is on its way!
                    </Text>
                </View>
                <Image source={require('../assets/images/bikeguy.jpg')} className="h-20 w-20"/>      
            </View>
            <View className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
                style={{backgroundColor:themeColors.bgColor(0.8)}}
            >
                <View
                    className="p-1 rounded-full"      
                    style={{backgroundColor:'rgba(255,255,255,0.8)'}}          
                >
                    <Image className="h-16 w-16 rounded-full" source={require('../assets/images/deliveryguy.png')}/>
                </View>
                <View className="flex-1 ml-3">
                    <Text className="text-lg font-bold text-white">
                        Syed Noman
                    </Text>
                    <Text className="font-semibold text-white">
                        Your rider
                    </Text>
                </View>
                <View className="flex-row items-center space-x-3 mr-3">
                    <TouchableOpacity className="bg-white p-2 rounded-full">
                        <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Home')} className="bg-white p-2 rounded-full">
                        <Icon.X  stroke={'red'} strokeWidth={4}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}