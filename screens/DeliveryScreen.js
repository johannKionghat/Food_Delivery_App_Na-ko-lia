import { View, Text } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

export default function DeliveryScreen() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();
  return (
    <View className="flex-1">
    {/* map view */}
      <MapView
        initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
            lattitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        className="flex-1"
        mapType='standard'
        >
            <Marker coordinate={{
                latitude: restaurant.lat,
                longitude: restaurant.lng,
            }}/>
        </MapView>
    </View>
  )
}