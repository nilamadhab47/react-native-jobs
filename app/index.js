import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants/theme";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

import menu from "../assets/icons/menu.png";
import profile from "../constants/images"

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn iconUrl={menu} dimension="60%" />,
          headerRight: () => <ScreenHeaderBtn iconUrl={profile} dimension="100%" />,
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator = {false}>
        <View
        style={{
          flex:1 ,
          padding: SIZES.medium
        }}
        >
          <Welcome />
          <Popularjobs/>
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
