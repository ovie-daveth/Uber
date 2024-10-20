/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type Prop = {
    title: string
    action: () => void;
    bgVariant: string
    textVariant: string
    IconRight: string
    IconLeft: string
    className?: string
}

// Utility function to get background style based on the variant

const CustomButton = ({
    title,
    action,
    bgVariant = "primary",
    textVariant = "default",
    IconRight,
    IconLeft,
    ...prop
}: Prop) => {

    const getBgVariantStyle = (bgVariant: string) => {
        switch (bgVariant) {
            case "secondary":
                return "bg-gray-500";
            case "success":
                return "bg-blue-500";
            case "danger":
                return "bg-red-500";
            case "outline":
                return "bg-transparent border-neutral-300 border-[0.5px]";
            default:
                return "bg-[#0286ff]"; // Default to primary color
        }
    };

    const getTextVariantStyle = (textVariant: string) => {
        switch (textVariant) {
            case "secondary":
                return "text-white";
            case "success":
                return "test-blue-500";
            case "danger":
                return "text-red-500";
            case "outline":
                return "bg-transparent border-neutral-300 border-[0.5px]";
            default:
                return "text-neutral-700"; // Default to primary color
        }
    };
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={action}
            className={`w-full h-12 py-2 items-center justify-center shadow-md rounded-full flex-row shadow-neutral-400/70 ${getBgVariantStyle(
                bgVariant,
            )}`}
            {...prop}
        >
            {IconLeft && <IconLeft />}
            <Text className={`text-white text-lg font-semibold ${getTextVariantStyle(textVariant)}`}>{title}</Text>
            {IconRight && <IconRight />}
        </TouchableOpacity>
    );
};

export default CustomButton;
