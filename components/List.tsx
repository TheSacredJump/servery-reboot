import { categories } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export default function List() {
    const renderCategory = ({ item }: any) => (
        <TouchableOpacity className='mr-7'>
            <View className='relative w-24 h-24'>
                <Image 
                    source={item.image}
                    className='w-24 h-24 rounded-2xl'
                    resizeMode='cover'
                />
            </View>
            <Text className='text-center text-gray-200 font-medium mt-2'>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            className='w-full'
        />
    );
}