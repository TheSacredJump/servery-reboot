import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import OAuth from '@/components/OAuth';
import { icons, images } from '@/constants';
import { useSignIn } from '@clerk/clerk-expo';
import { Link, router } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Text, ScrollView, View, Image } from 'react-native';

const SignIn = () => {
    const { signIn, setActive, isLoaded } = useSignIn()

    const [form , setForm] = useState({
        email: "",
        password: "",
    })

    const onSignInPress = useCallback(async () => {
      if (!isLoaded) {
        return
      }
  
      try {
        const signInAttempt = await signIn.create({
          identifier: form.email,
          password: form.password,
        })
  
        if (signInAttempt.status === 'complete') {
          await setActive({ session: signInAttempt.createdSessionId })
          router.replace('/')
        } else {
          // See https://clerk.com/docs/custom-flows/error-handling
          // for more info on error handling
          console.error(JSON.stringify(signInAttempt, null, 2))
        }
      } catch (err: any) {
        console.error(JSON.stringify(err, null, 2))
      }
    }, [isLoaded, form.email, form.password])

    return (
    <ScrollView className='flex-1 bg-secondary-900'>
        <View className='flex-1 bg-secondary-900'>
            <View className='relative w-full h-[250px]'>
                <Image
                  source={images.signUpPan}
                  className='z-0 w-full h-[250px]'
                />
                <Text className='text-2xl text-white font-JakartaSemiBold absolute bottom-5 left-5'>Welcome 👋</Text>
            </View>

            <View className='p-5'>
                <InputField 
                  label="Email" 
                  placeholder="Enter your email" 
                  icon={icons.email} 
                  value={form.email} 
                  onChangeText={(value) => setForm({...form, email: value})}
                />
                <InputField 
                  label="Password" 
                  placeholder="Enter your password" 
                  icon={icons.lock} 
                  secureTextEntry={true}
                  value={form.password} 
                  onChangeText={(value) => setForm({...form, password: value})}
                />

                <CustomButton
                  title='Sign In'
                  onPress={onSignInPress}
                  className='mt-10'
                />

                {/* OAuth */}
                <OAuth />

                <Link href='/sign-up' className='text-lg text-center text-neutral-400 mt-10'>
                    <Text>Don't have an account?{" "}</Text>
                    <Text className='text-primary-500'>Sign Up</Text>
                </Link>
            </View>

            {/* Verification Modal */}
        </View>
    </ScrollView>
    );
}

export default SignIn;
