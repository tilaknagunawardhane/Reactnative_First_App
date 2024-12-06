import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView
      contentContainerStyle={{
        height: "100%",
      }}
      className="bg-primary"
      >
        <View className="w-full flex justify-center items-center h-full px-4" >
        <Text className="text-secondary-200">Aora</Text>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}


