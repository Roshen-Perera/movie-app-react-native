import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const index = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"/>
      <ScrollView className="flex-1 px-5">
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
