import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";

const index = () => {
  const router = useRouter(); // This is a hook from expo-router that allows you to navigate between screens
  const { 
    data: movies, 
    loading: moviesLoading, 
    error: moviesError
  } = useFetch(() => fetchMovies({
      query: "",
  }));
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text className="">Error: {moviesError?.message}</Text>
        ) : (
          <View>
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for movies"
            />
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3"> Latest Movies </Text>
              <FlatList
                data={movies}
                renderItem={({ item }) => (
                  <Text className="text-white text-sm">{item.title}</Text>
                )} 
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                   justifyContent: "flex-start",
                   gap: 20, 
                   paddingRight: 5,
                   paddingBottom: 10 
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              /> 
            </>
          </View>
        )}
        <View className="flex-1 mt-5"></View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
