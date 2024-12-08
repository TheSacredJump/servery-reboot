import { useUser } from '@clerk/clerk-expo'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { categories, images } from '@/constants';
import List from '@/components/List';

export default function Page() {
  const { user } = useUser()

  return (
    <SafeAreaView className='bg-secondary-900 flex-1 px-4 py-4'>
      <ScrollView>
        <View className='flex flex-row justify-between items-center'>
          <View className='flex flex-row items-center gap-x-2'>
            <Image source={{ uri: user?.imageUrl }}  className='w-10 h-10 rounded-full' />
            <Text className='text-white text-xl font-medium ml-2'>{user?.firstName}</Text>
            <AntDesign name="right" size={18} color="#CCCCCC" />
          </View>
          <View className='flex flex-row items-center gap-x-5'>
            <TouchableOpacity>
              <Fontisto name="search" size={22} color="#F4F4F4" />
            </TouchableOpacity>
            <LinearGradient
              colors={['#5fb3f7', '#2c67f2']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className='rounded-lg px-3 py-2'
              style={{borderRadius: 5 }}
            >
              <TouchableOpacity className='flex flex-row gap-x-2 rounded-lg px-3 items-center'>
                <Ionicons name="sparkles-sharp" size={14} color="white" />
                <Text className='text-white text-lg font-medium'>View All</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>

        {/* Recipe of the Day */}
        <View className='mt-10 relative w-full h-[400px]'>
          <Image 
            source={images.recipeOfTheDay} 
            resizeMode='cover' 
            className='w-full h-[400px]'
            style={{ borderRadius: 10 }}
          />
          <LinearGradient
            colors={['#000000', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.65 }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: '100%',
              borderRadius: 10
            }}
          />
          <View className='absolute w-full h-full px-4 py-4'>
            <View className='flex flex-row items-center justify-between'>
              <Text className='text-neutral-400'>RECIPE OF THE DAY</Text>
              <View className='px-2 py-1 rounded-lg bg-primary-500/25'>
                <Text className='text-primary-500'>200+ Tastes</Text>
              </View>
            </View>
            <Text className='text-white text-3xl font-bold mt-3'>Sauteed Lamb With Pickled Onions</Text>
          </View>
        </View>

        {/* Random Recipe */}
        <View style={{borderRadius: 35}} className='mt-4 w-full py-2 px-4 bg-neutral-800 flex flex-row items-center justify-between'>
          <View className='flex flex-row items-center gap-x-5'>
            <View className='rounded-full p-2 bg-neutral-700'>
              <Image 
                source={images.dice} 
                resizeMode='cover' 
                className='w-14 h-14 rounded-full'
              />
            </View>
            <View className='flex gap-y-1'>
              <Text className='text-white text-lg font-bold'>Random Recipe</Text>
              <Text className='text-neutral-400 text-sm'>Don't know what to cook?</Text>
            </View>
          </View>
          <TouchableOpacity className='bg-red-500 rounded-full p-4 mr-2'>
            <AntDesign name="arrowright" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View className='mt-8'>
          <List />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}