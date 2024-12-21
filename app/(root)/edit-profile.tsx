import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const EditProfile = () => {
    const { user } = useUser();
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState(user?.firstName || '');
    const [lastName, setLastName] = useState(user?.lastName || '');
    const [username, setUsername] = useState(user?.username || '');
    const [bio, setBio] = useState('Food enthusiast sharing my culinary adventures 🍜');
    
    const handleUpdateProfile = async () => {
        try {
            await user?.update({
                firstName,
                lastName,
                username,
                // Add any other fields you want to update
            });
            navigation.goBack();
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleSelectImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            try {
                // Upload image to Clerk
                const response = await user?.setProfileImage({
                    file: result.assets[0],
                });
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-secondary-900">
            <View className="p-4">
                {/* Header */}
                <View className="flex-row justify-between items-center mb-8">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text className="text-white text-lg">Cancel</Text>
                    </TouchableOpacity>
                    <Text className="text-white text-lg font-bold">Edit Profile</Text>
                    <TouchableOpacity onPress={handleUpdateProfile}>
                        <Text className="text-blue-500 text-lg">Done</Text>
                    </TouchableOpacity>
                </View>

                {/* Profile Image */}
                <View className="items-center mb-8">
                    <TouchableOpacity className='flex flex-col justify-center' onPress={handleSelectImage}>
                        <Image
                            source={{ uri: user?.imageUrl }}
                            className="w-24 h-24 rounded-full mb-2 mx-auto"
                        />
                        <Text className="text-blue-500 text-center">Change Profile Photo</Text>
                    </TouchableOpacity>
                </View>

                {/* Form Fields */}
                <View className="space-y-4">
                    <View>
                        <Text className="text-neutral-400 mb-2">First Name</Text>
                        <TextInput
                            value={firstName}
                            onChangeText={setFirstName}
                            className="bg-secondary-800 text-white p-3 rounded-lg"
                            placeholderTextColor="#666"
                        />
                    </View>

                    <View className='mt-4'>
                        <Text className="text-neutral-400 mb-2">Last Name</Text>
                        <TextInput
                            value={lastName}
                            onChangeText={setLastName}
                            className="bg-secondary-800 text-white p-3 rounded-lg"
                            placeholderTextColor="#666"
                        />
                    </View>

                    <View className='mt-4'>
                        <Text className="text-neutral-400 mb-2">Username</Text>
                        <TextInput
                            value={username}
                            onChangeText={setUsername}
                            className="bg-secondary-800 text-white p-3 rounded-lg"
                            placeholderTextColor="#666"
                        />
                    </View>

                    <View className='mt-4'>
                        <Text className="text-neutral-400 mb-2">Bio</Text>
                        <TextInput
                            value={bio}
                            onChangeText={setBio}
                            multiline
                            numberOfLines={3}
                            className="bg-secondary-800 text-white p-3 rounded-lg"
                            placeholderTextColor="#666"
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default EditProfile;