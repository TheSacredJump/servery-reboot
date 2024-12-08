import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COOKBOOKS, images } from '@/constants';

const CookbookBoard = ({ item }: any) => (
 <TouchableOpacity className='mx-2 mb-4'>
   <View className='bg-neutral-800 rounded-xl overflow-hidden'>
     {/* Cover Image */}
     <View className='relative h-48'>
       <Image 
         source={item.coverImage}
         className='w-full h-full'
         resizeMode='cover'
       />
       <LinearGradient
         colors={['transparent', 'rgba(0,0,0,0.8)']}
         start={{ x: 0, y: 0 }}
         end={{ x: 0, y: 1 }}
         className='absolute bottom-0 left-0 right-0 h-24'
       />
       <View className='absolute bottom-3 left-3'>
         <Text className='text-white text-xl font-bold'>{item.name}</Text>
         <Text className='text-neutral-300 text-sm'>{item.recipeCount} recipes</Text>
       </View>
       <TouchableOpacity className='absolute top-3 right-3 w-8 h-8 bg-black/40 rounded-full items-center justify-center'>
         <Feather name="more-horizontal" size={18} color="white" />
       </TouchableOpacity>
     </View>
     
     {/* Preview Grid */}
     <View className='p-3'>
       <Text className='text-neutral-400 text-sm mb-2'>{item.description}</Text>
       <View className='flex-row gap-1'>
         <View className='flex-1 aspect-square rounded-md bg-neutral-700' />
         <View className='flex-1 aspect-square rounded-md bg-neutral-700' />
         <View className='flex-1 aspect-square rounded-md bg-neutral-700' />
       </View>
     </View>
   </View>
 </TouchableOpacity>
);

const Cookbooks = () => {
 return (
   <SafeAreaView className='flex-1 bg-secondary-900 mb-20'>
     {/* Header */}
     <View className='px-4 py-4 flex-row items-center justify-between'>
       <View>
         <Text className='text-neutral-400 text-base'>Your</Text>
         <Text className='text-white text-2xl font-bold'>Cookbooks</Text>
       </View>
       <View className='flex-row gap-x-4'>
         <TouchableOpacity>
           <Ionicons name="search-outline" size={24} color="#CCCCCC" />
         </TouchableOpacity>
         <TouchableOpacity>
           <Ionicons name="add-circle-outline" size={24} color="#CCCCCC" />
         </TouchableOpacity>
       </View>
     </View>

     {/* Cookbooks List */}
     <FlatList
       data={COOKBOOKS}
       renderItem={({ item }) => <CookbookBoard item={item} />}
       keyExtractor={item => item.id}
       contentContainerStyle={{ padding: 8 }}
       showsVerticalScrollIndicator={false}
     />
   </SafeAreaView>
 );
};

export default Cookbooks;