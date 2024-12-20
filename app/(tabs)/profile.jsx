import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { useLocalSearchParams } from "expo-router";
import { getUserPosts } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { icons } from "../../constants";
import InfoBox from "../../components/InfoBox";

const Profile = () => {
  const {user, setUser, setIsLoggedIn} = useGlobalContext();
  // const { data: posts } = useAppwrite(() => getUserPosts(user.$id));
  const { data: posts } = useAppwrite(() => user ? getUserPosts(user.$id) : null);

  const logout = () => {

  }

  // if (!user) {
  //   return (
  //     <SafeAreaView className="bg-primary h-full flex justify-center items-center">
  //       <Text className="text-white text-lg">User not logged in</Text>
  //     </SafeAreaView>
  //   );
  // }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={logout}
            >
              <Image
                source={icons.logout}
                resizeMode="contain" 
                className="w-6 h-6"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View> 

            <InfoBox
              
            />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos Found for this query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
