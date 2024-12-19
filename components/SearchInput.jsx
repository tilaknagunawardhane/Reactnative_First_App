import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import {usePathname, router} from "expo-router"

const SearchInput = ({initialQuery}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || ""); 
  return (
      <View
        className={`w-full h-16 px-4 bg-black-100 rounded-2xl border-2 flex flex-row items-center space-x-4 ${
          isFocused ? "border-secondary" : "border-gray-800"
        }`}
      >
        <TextInput
          className="text-base mt-0.5 text-white flex-1 font-pregular"
          value={query}
          placeholder="Search for a video topic"
          placeholderTextColor="#7B7B8B"
          onChangeText={(e) => setQuery(e)}
        />

        <TouchableOpacity
          onPress={()=> {
            if(!query){
              return Alert.alert("Missing Query", "Please input somthing to search")
            }

            if(pathname.startsWith('/search'))  
              router.setParams({query})
            else router.push(`/search/${query}`)
          }}
        >
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
