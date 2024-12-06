import { Tabs } from 'expo-router';
import { Image, View } from 'react-native';

const TabIcon = () => (
    <View>
        <View>
            <Image />
        </View>
    </View>
)

const Layout = () => {

  return (
    <Tabs 
      initialRouteName="home" 
      screenOptions={{ 
        tabBarActiveTintColor: '#101314' 
        }}>
        <Tabs.Screen 
          name="home" 
          options={{ 
            title: "Home", 
            headerShown: false, 
            tabBarIcon: () => <TabIcon /> 
          }} 
        />
    </Tabs>
  );
}

export default Layout