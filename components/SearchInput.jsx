import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    

      <View
        className={`w-full h-16 px-4 bg-black-100 rounded-2xl border-2 flex flex-row items-center space-x-4 ${
          isFocused ? "border-secondary" : "border-gray-800"
        }`}
      >
        <TextInput
          className="text-base mt-0.5 text-white flex-1 font-pregular"
          value={value}
          placeholder="Search for a video topic"
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          onFocus={() => setIsFocused(true)} // Handle focus
          onBlur={() => setIsFocused(false)} // Handle blur
          {...props}
        />

        <TouchableOpacity>
            <Image
                source={icons.search}
                className="w-5 h-5"
                resizeMode="contain"
            />
        </TouchableOpacity>
      </View>
  );
};

export default SearchInput;
