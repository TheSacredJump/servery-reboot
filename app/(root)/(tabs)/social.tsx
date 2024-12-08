import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';
import { images, POSTS, socialFilters } from '@/constants';

const Post = ({ post }: any) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <View className='bg-neutral-800 rounded-xl mb-4 mt-4'>
      {/* Post Header */}
      <View className='flex-row items-center justify-between p-4'>
        <View className='flex-row items-center gap-x-2'>
          <Image 
            source={ post.user.avatar }
            className='w-10 h-10 rounded-full'
          />
          <View>
            <Text className='text-white font-medium'>{post.user.name}</Text>
            <Text className='text-neutral-400 text-sm'>@{post.user.username}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Feather name="more-horizontal" size={20} color="#CCCCCC" />
        </TouchableOpacity>
      </View>

      {/* Post Content */}
      <View className='px-4 mb-2'>
        <Text className='text-white text-base'>{post.content}</Text>
      </View>

      {/* Post Image */}
      {post.image && (
        <Image
          source={ post.image }
          className='w-full h-[300px]'
          resizeMode='cover'
        />
      )}

      {/* Post Actions */}
      <View className='p-4'>
        <View className='flex-row items-center justify-between mb-2'>
          <View className='flex-row items-center gap-x-4'>
            <TouchableOpacity onPress={handleLike} className='flex-row items-center gap-x-1'>
              <AntDesign 
                name={isLiked ? "heart" : "hearto"} 
                size={20} 
                color={isLiked ? "#FF385C" : "#CCCCCC"} 
              />
              <Text className='text-neutral-400'>{likesCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity className='flex-row items-center gap-x-1'>
              <Ionicons name="chatbubble-outline" size={20} color="#CCCCCC" />
              <Text className='text-neutral-400'>{post.comments}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="share-2" size={20} color="#CCCCCC" />
            </TouchableOpacity>
          </View>
          <Text className='text-neutral-400 text-sm'>{post.timeAgo}</Text>
        </View>
      </View>
    </View>
  );
};

const Social = () => {
  const { user } = useUser();
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  
  const renderFilter = ({ item }: any) => (
    <TouchableOpacity 
      onPress={() => {
        // If the filter is already selected, unselect it, otherwise select it
        setSelectedFilter(selectedFilter === item.id ? null : item.id)
      }}
      className={`px-4 py-2 rounded-full mx-2 flex-row items-center gap-x-2 ${
        selectedFilter === item.id ? 'bg-white' : 'bg-neutral-800'
      }`}
    >
      <Text className='text-lg'>{item.emoji}</Text>
      <Text className={`${
        selectedFilter === item.id ? 'text-black' : 'text-white'
      } font-medium`}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className='flex-1 bg-secondary-900'>

      {/* Create Post */}
      <View className='p-4 border-b border-neutral-700'>
        <View className='flex-row items-center gap-x-3'>
          <Image 
            source={{ uri: user?.imageUrl }} 
            className='w-10 h-10 rounded-full'
          />
          <TouchableOpacity className='flex-1 bg-neutral-800 rounded-full px-4 py-2'>
            <Text className='text-neutral-400'>What's on your mind?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="image-outline" size={24} color="#CCCCCC" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Filters */}
      <View className='py-2 mt-2'>
        <FlatList
          data={socialFilters}
          renderItem={renderFilter}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          className='w-full'
          contentContainerStyle={{ paddingHorizontal: 8 }}
        />
      </View>

      {/* Posts Feed */}
      <FlatList
        data={POSTS}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={item => item.id}
        className='px-4'
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Social;