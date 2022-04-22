import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function Meals() {
  const meals = useSelector((state) => state.meals.meals);

  return (
    <View style={{ margin: 50 }}>
      <Text>meals</Text>
      <FlatList
        data={meals}
        renderItem={(itemData) => {
          return <Text>{itemData.item.title}</Text>;
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
}
