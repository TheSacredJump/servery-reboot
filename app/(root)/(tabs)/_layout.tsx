import { icons } from '@/constants';
import { Tabs } from 'expo-router';
import { Image, ImageSourcePropType, View } from 'react-native';

const TabIcon = ({ focused, source }: { focused: boolean, source: ImageSourcePropType }) => (
    <View className={`flex flex-row justify-center items-center rounded-full`}>
        <View className={`rounded-full w-12 h-12 items-center justify-center ${focused ? 'bg-orange-500' : ''}`}>
            <Image source={source} tintColor='white' resizeMode="contain" className='w-7 h-7' />
        </View>
    </View>
)

const Layout = () => {

  return (
    <Tabs 
      initialRouteName="home" 
      screenOptions={{ 
        tabBarActiveTintColor: 'white', 
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#101314',
          paddingBottom: 32,
          overflow: 'hidden',
          height: 85,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row', 
          position: 'absolute',
        }
        }}>
        <Tabs.Screen 
          name="home" 
          options={{ 
            title: "Home", 
            headerShown: false, 
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} source={icons.home} /> 
            )
          }} 
        />
        <Tabs.Screen 
          name="cookbooks" 
          options={{ 
            title: "Cookbooks", 
            headerShown: false, 
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} source={icons.list} /> 
            )
          }} 
        />
        <Tabs.Screen 
          name="social" 
          options={{ 
            title: "Social", 
            headerShown: false, 
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} source={icons.chat} /> 
            )
          }} 
        />
        <Tabs.Screen 
          name="profile" 
          options={{ 
            title: "Profile", 
            headerShown: false, 
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} source={icons.profile} /> 
            )
          }} 
        />
    </Tabs>
  );
}

export default Layout