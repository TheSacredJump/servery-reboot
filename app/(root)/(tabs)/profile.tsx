import { images } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, Text, View, Dimensions, Pressable, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";

const Profile = () => {
    const { user } = useUser();
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('recipes'); // 'recipes' or 'posts'
    
    // Calculate dimensions for the grid
    const windowWidth = Dimensions.get('window').width;
    const itemWidth = windowWidth / 3;
    
    // Dummy data for recipes and posts
    const userRecipes = [
        { id: 1, image: images.ramen, title: "Spicy Ramen" },
        { id: 2, image: images.ramen, title: "Miso Soup" },
        { id: 3, image: images.ramen, title: "Tempura" },
    ];

    const userPosts = [
        { id: 1, image: images.ramen, caption: "Cooking day!" },
        { id: 2, image: images.ramen, caption: "My kitchen setup" },
        { id: 3, image: images.ramen, caption: "New recipe testing" },
    ];

    const renderGridItem = ({ item }: any) => (
        <Pressable 
            onPress={() => {
                if (activeTab === 'recipes') {
                    navigation.navigate('RecipeDetail', { recipeId: item.id });
                } else {
                    navigation.navigate('PostDetail', { postId: item.id });
                }
            }}
            className="relative"
            style={{ width: itemWidth, height: itemWidth }}
        >
            <Image
                source={item.image}
                className="w-full h-full"
                style={{ borderWidth: 0.5, borderColor: '#202020' }}
            />
        </Pressable>
    );

    return (
        <ScrollView className='flex-1 bg-secondary-900'>
            <View className='flex-1 bg-secondary-900'>
                {/* Profile Header Section */}
                <View className='relative w-full h-[250px]'>
                    <Image
                        source={images.ramen}
                        className='z-0 w-full h-[250px]'
                    />
                    <LinearGradient
                        colors={['transparent', '#101314']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            height: '100%',
                        }}
                    />
                    <View className="flex flex-row w-full justify-center">
                        <Image
                            source={{ uri: user?.imageUrl }}
                            className='absolute bottom-[-40px] w-[125px] h-[125px] rounded-full z-10 border-8 border-[#101314]'
                        />
                    </View>
                </View>

                {/* Profile Stats Section */}
                <View className="w-full flex flex-row justify-between items-center px-6">
                    <Text className="text-neutral-400 text-lg font-medium text-center mt-14">64 friends</Text>
                    <Text className="text-white text-2xl font-medium text-center mt-14">@{user?.username}</Text>
                    <Text className="text-neutral-400 text-lg font-medium text-center mt-14">120 recipes</Text>
                </View>

                {/* Profile Bio Section */}
                <View className="px-6 mt-4">
                    <Text className="text-white text-base">{user?.firstName} {user?.lastName}</Text>
                    <Text className="text-neutral-400 mt-1">Food enthusiast sharing my culinary adventures 🍜</Text>
                    
                    {/* Edit Profile Button */}
                    <TouchableOpacity 
                        onPress={() => router.push('/(root)/edit-profile')}
                        className="mt-3 border border-neutral-600 rounded-lg py-2"
                    >
                        <Text className="text-white text-center font-medium">Edit Profile</Text>
                    </TouchableOpacity>
                </View>

                {/* Tabs Section */}
                <View className="mt-6 border-t border-neutral-800">
                    <View className="flex-row">
                        <TouchableOpacity 
                            onPress={() => setActiveTab('recipes')}
                            className={`flex-1 p-4 ${activeTab === 'recipes' ? 'border-b-2 border-white' : ''}`}
                        >
                            <Ionicons 
                                name="restaurant-outline" 
                                size={24} 
                                color={activeTab === 'recipes' ? '#fff' : '#666'}
                                style={{ alignSelf: 'center' }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setActiveTab('posts')}
                            className={`flex-1 p-4 ${activeTab === 'posts' ? 'border-b-2 border-white' : ''}`}
                        >
                            <Ionicons 
                                name="grid-outline" 
                                size={24} 
                                color={activeTab === 'posts' ? '#fff' : '#666'}
                                style={{ alignSelf: 'center' }}
                            />
                        </TouchableOpacity>
                    </View>
                    
                    {/* Grid Layout */}
                    <View className="flex-row flex-wrap">
                        {(activeTab === 'recipes' ? userRecipes : userPosts).map((item) => (
                            <View 
                                key={item.id} 
                                style={{ width: itemWidth, height: itemWidth }}
                            >
                                {renderGridItem({ item })}
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Profile;