import { View, Text, FlatList, Button } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleFavourite } from "./../store/actions/meals";

export default function Meals() {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);

  const dispatch = useDispatch();

  return (
    <View style={{ margin: 50 }}>
      <Text>Fav Meals</Text>
      <FlatList
        data={favMeals}
        renderItem={(itemData) => {
          return (
            <View style={{ margin: 10 }}>
              <Button
                title={itemData.item.title}
                onPress={() => {
                  dispatch(toggleFavourite(itemData.item.id));
                }}
              />
            </View>
          );
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
}
