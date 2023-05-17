import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length == 0) return null;
  return (
    <View className="absolute z-50 w-full bottom-10">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="font-extrabold text-white text-lg py-1 px-2 bg-[#01A296]">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg font-extrabold text-white">
          <Currency quantity={basketTotal} currency="INR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
