import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="w-20 h-20 rounded"
      />
      <Text className="absolute font-bold text-white bottom-1 left-1">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
