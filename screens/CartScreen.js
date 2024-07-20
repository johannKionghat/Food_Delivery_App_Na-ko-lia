import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { featured } from '../constants';
import { useNavigation } from '@react-navigation/native';
import * as Icon from'react-native-feather'
import { themeColors } from '../theme';
 
export default function CartScreen() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();
  return (
    <View className="bg-white flex-1 justify-between">
        {/* back button */}
        <TouchableOpacity 
        onPress={()=>{
          navigation.goBack()
          }} 
        className="absolute z-10 rounded-full p-1 shadow shadow-black top-5 left-2"
        style={{backgroundColor: themeColors.bgColor(1)}}
        >
            <Icon.ArrowLeft strokeWidth={3} stroke={'white'} />
        </TouchableOpacity>
        <View className='pb-3'>
          <Text className="text-center font-bold text-xl"> Your cart</Text>
          <Text className="text-center text-gray-500"> {restaurant.name}</Text>
        </View>

        {/* delivery time */}
        <View style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="flex-row px-4 py-2 items-center"
        >
          <Image source={require('../assets/images/bikeguy2.jpg')} className="w-12 h-12 rounded-full"/>
          <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
          <TouchableOpacity>
              <Text className="font-bold" style={{color: themeColors.text}}>
                  Change
              </Text>
          </TouchableOpacity>
        </View>

        {/* dishes */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom:50,
          }}
        >
          {
            restaurant.dishes.map((dish, index)=>{
              return(
                <View key={index} className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mt-3 mx-3 shadow-md shadow-black">
                  <Text className="font-bold" style={{color: themeColors.text}}>
                    2 x
                  </Text>
                  <Image className="h-14 w-14 rounded-full" source={dish.image}/>
                  <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                  <Text className="font-semibold text-base">$ {dish.price}</Text>
                  <TouchableOpacity 
                    className="p-1 rounded-full"
                    style={{backgroundColor: themeColors.bgColor(1)}}
                  >
                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white"/>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>
        {/* totals */}
        <View style={{backgroundColor: themeColors.bgColor(0.2)}} className="p-6 px-8 rounded-t-3xl space-y-4">
              <View className="flex-row justify-between">
                <Text className="text-gray-700">Subtotal</Text>
                <Text className="text-gray-700">$ 20</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-700">Delivery Fee</Text>
                <Text className="text-gray-700">$ 2</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-700 font-extrabold">Order Total</Text>
                <Text className="text-gray-700 font-extrabold">$ 30</Text>
              </View>
              <View>
                <TouchableOpacity 
                onPress={()=> navigation.navigate('Delivery')}
                style={{backgroundColor: themeColors.bgColor(1)}} 
                className="p-3 rounded-full" >
                    <Text className="text-white text-center font-bold text-lg">
                      Place Order
                    </Text>
                </TouchableOpacity>
              </View>
        </View>

    </View>
  )
}