import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import OAuth from '@/components/OAuth';
import { icons, images } from '@/constants';
import { useSignUp } from '@clerk/clerk-expo';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Text, ScrollView, View, Image, Alert } from 'react-native';
import { ReactNativeModal } from 'react-native-modal';

const SignUp = () => {
    const { isLoaded, signUp, setActive } = useSignUp()

    const [form , setForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    })

    const [verification, setVerification] = useState({
        state: "default",
        error: "",
        code: "",
    })

    const onSignUpPress = async () => {
        if (!isLoaded) {
          return
        }
    
        try {
          await signUp.create({
            firstName: form.name.substring(0, form.name.indexOf(" ")),
            lastName: form.name.substring(form.name.indexOf(" ") + 1),
            username: form.username,
            emailAddress: form.email,
            password: form.password,
          })
    
          await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
    
          setVerification({
            ...verification, 
            state: 'pending'
        })
        } catch (err: any) {
          Alert.alert('Error',err.errors[0].longMessage)
        }
      }
    
      const onPressVerify = async () => {
        if (!isLoaded) {
          return;
        }
    
        try {
          const completeSignUp = await signUp.attemptEmailAddressVerification({
            code: verification.code,
          })
    
          if (completeSignUp.status === 'complete') {
            //TODO: Create a Database User.

            await setActive({ session: completeSignUp.createdSessionId })
            setVerification({
              ...verification,
              state: "success",
            })
          } else {
            setVerification({
              ...verification,
              state: "failed",
              error: "Verification failed."
            })
          }
        } catch (err: any) {
            setVerification({
                ...verification,
                state: "failed",
                error: err.errors[0].longMessage
              })
        }
      }
    

    return (
    <ScrollView className='flex-1 bg-secondary-900'>
        <View className='flex-1 bg-secondary-900'>
            <View className='relative w-full h-[250px]'>
                <Image
                  source={images.signUpPan}
                  className='z-0 w-full h-[250px]'
                />
                <Text className='text-2xl text-white font-JakartaSemiBold absolute bottom-5 left-5'>Create Your Account</Text>
            </View>

            <View className='p-5'>
              <InputField 
                  label="Name" 
                  placeholder="Enter your full name" 
                  icon={icons.person} 
                  value={form.name} 
                  onChangeText={(value) => setForm({...form, name: value})}
                />
                <InputField 
                  label="Username" 
                  placeholder="Create your username" 
                  icon={icons.person} 
                  value={form.username} 
                  onChangeText={(value) => setForm({...form, username: value})}
                />
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
                  title='Sign Up'
                  onPress={onSignUpPress}
                  className='mt-10'
                />

                {/* OAuth */}
                <OAuth />

                <Link href='/sign-in' className='text-lg text-center text-neutral-400 mt-10'>
                    <Text>Already have an account?{" "}</Text>
                    <Text className='text-primary-500'>Log In</Text>
                </Link>
            </View>

            <ReactNativeModal isVisible={verification.state === "pending" || verification.state === "success"}>
            {verification.state === "pending" ? (
              <View className='bg-secondary-900 px-7 py-9 rounded-2xl min-h-[300px]'>
                <Text className='text-white text-2xl font-JakartaExtraBold mb-2'>Verification</Text>
                <Text className='font-Jakarta mb-5 text-neutral-200'>
                  We've sent a verification code to {form.email}
                </Text>

                <InputField
                  label="Code"
                  icon={icons.lock}
                  placeholder='12345'
                  value={verification.code}
                  keyboardType='numeric'
                  onChangeText={(code) => setVerification({ ...verification, code })}
                />

                {verification.error && (
                  <Text className='text-red-500 text-sm mt-1'>
                    {verification.error}
                  </Text>
                )}

                <CustomButton
                  title="Verify Email"
                  onPress={onPressVerify}
                  className='mt-5 bg-primary-500'
                  textVariant='white'
                />
              </View>
              ) : verification.state === "success" ? (
              <View className='bg-secondary-900 px-7 py-9 rounded-2xl min-h-[300px]'>
                <Image source={images.check} className='w-[110px] h-[110px] mx-auto my-5'/>
                <Text className='text-white text-3xl font-JakartaBold text-center'>Verified</Text>
                <Text className='text-base text-gray-500 font-Jakarta text-center mt-2'>
                  You have successfully verified your account.
                </Text>

                <CustomButton
                  title="Explore Home"
                  onPress={() => {
                    router.push('/(root)/(tabs)/home');
                    setVerification({
                      state: "default",
                      error: "",
                      code: "",
                    });
                  }}
                  className="mt-5"
                />
              </View>
              ) : <View></View>}
            </ReactNativeModal>
        </View>
    </ScrollView>
    );
}

export default SignUp;
