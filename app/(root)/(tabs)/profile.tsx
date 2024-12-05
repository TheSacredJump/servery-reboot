import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
    return (
    <SafeAreaView className='flex-1 items-center justify-center bg-secondary-900'>
        <Text className='text-white'>Profile</Text>
    </SafeAreaView>
    );
}

export default Profile;