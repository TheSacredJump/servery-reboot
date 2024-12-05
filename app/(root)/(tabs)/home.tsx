import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    return (
    <SafeAreaView className='flex-1 items-center justify-center bg-secondary-900'>
        <Text className='text-white'>Home</Text>
    </SafeAreaView>
    );
}

export default Home;