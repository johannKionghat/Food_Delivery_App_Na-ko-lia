import { View, Text, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Searchbar from '../components/Searchbar';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { featured } from '../constants';

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white  pb-20" >
      <StatusBar barStyle={"light-content"} backgroundColor={"white"}/>
      {/* search bar */}
      <Searchbar/>
      {/* main */}
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{

        }}
      >
      {/* categories */}
      <Categories/>

      {/* featured */}
      <View className="mt-5">
        {
          [featured, featured, featured].map((item, index)=>{
            return(
              <FeaturedRow
                  key={index}
                  title={item.title}
                  restaurants={item.restaurants}
                  description={item.description}
              />
            )
          })
        }
      </View>

      </ScrollView>
    </SafeAreaView>
  )
}