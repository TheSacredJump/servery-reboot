import { ButtonProps } from "@/types/type";
import { Button, Text, TouchableOpacity } from "react-native";

const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
    switch (variant) {
        case 'secondary':
            return "bg-neutral-500";
        case 'danger':
            return "bg-red-500"; 
        case 'success':
            return "bg-green-500";   
        case 'outline':
            return "bg-transparent border-neutral-700 border-[0.5px]";
        default:
            return "bg-neutral-100" 
    }
}

const getTextVariantStyle = (variant: ButtonProps['textVariant']) => {
    switch (variant) {
        case 'primary':
            return "text-primary-500";
        case 'secondary':
            return "text-neutral-800";
        case 'danger':
            return "text-red-100"; 
        case 'success':
            return "text-green-100"; 
        case 'white':
            return "text-white";  
        default:
            return "text-secondary-900" 
    }
}

const CustomButton = ({ 
    onPress, 
    title, 
    bgVariant="primary", 
    textVariant="default", 
    IconLeft, 
    IconRight, 
    className, 
    ...props 
}: ButtonProps) => (
    <TouchableOpacity 
      onPress={onPress} 
      className={`w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-800/70 ${getBgVariantStyle(bgVariant)} ${className}`}
      {...props}
    >
        {IconLeft && <IconLeft />}
        <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>{title}</Text>
        {IconRight && <IconRight />}
    </TouchableOpacity>
)

export default CustomButton;