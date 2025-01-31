import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { View, TouchableOpacity, Text } from "react-native";

import { hexToRgb } from "../styles/hexToRgb";
import colors from "../styles/colors";
import Screen from "../Components/Screen";
import DiscountMenu from "../Components/DiscountMenu";

export default function SpecialOffersScreen({ navigation, route }) {
  const { totalPrice, selectedItemsCount } = useSelector(
    (state) => state.basket
  );

  // console.log(route.params.restaurantId);
  //using this id fetch the menu from the backend instead

  return (
    <Screen>
      <DiscountMenu DATA={DATA} navigation={navigation} />

      {/* basket */}
      {selectedItemsCount > 0 && (
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.fullButton}
            onPress={() =>
              navigation.navigate("basketScreen", {
                id: route.params.restaurantId,
              })
            }
          >
            <Text style={styles.basket}>{selectedItemsCount}</Text>
            <Text style={styles.footerText}>View Basket</Text>
            <Text style={styles.basketTotal}>${totalPrice.toFixed(2)}</Text>
          </TouchableOpacity>
        </View>
      )}
    </Screen>
  );
}

const styles = {
  footer: {
    position: "absolute",
    backgroundColor: "transparent",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: 10,
    paddingTop: 20,
  },
  fullButton: {
    backgroundColor: "rgba(" + hexToRgb(colors.primary) + ", 0.9)",
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    height: 50,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  basket: {
    color: "#fff",
    fontWeight: "bold",
    padding: 8,
    fontSize: 18,
  },
  basketTotal: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
};

const DATA = [
  {
    title: "Starters",
    data: [
      {
        product: {
          id: 1,
          name: "Garlic Bread",
          info: "Toasted bread with garlic",
          price: 5.99,
          bonusPoints: 10,
          img: require("../../assets/image1-1.png"),
        },
        discountPercentage: 10, // Example discount percentage
      },
      {
        product: {
          id: 2,
          name: "Caesar Salad",
          info: "Fresh salad with Caesar dressing",
          price: 8.99,
          bonusPoints: 15,
          img: require("../../assets/image2-1.jpeg"),
        },
        discountPercentage: 15, // Example discount percentage
      },
      {
        product: {
          id: 3,
          name: "Bruschetta",
          info: "Toasted bread topped with tomatoes, basil, and olive oil",
          price: 6.99,
          bonusPoints: 12,
          img: require("../../assets/image3-1.jpeg"),
        },
        discountPercentage: 20, // Example discount percentage
      },
      // Add more starter items here if needed
    ],
  },
  {
    title: "Main Courses",
    data: [
      {
        product: {
          id: 5,
          name: "Spaghetti Bolognese",
          info: "Classic Italian pasta dish",
          price: 12.99,
          bonusPoints: 20,
          img: require("../../assets/image3-1.jpeg"),
        },
        discountPercentage: 25, // Example discount percentage
      },
      {
        product: {
          id: 6,
          name: "Grilled Salmon",
          info: "Freshly grilled salmon fillet",
          price: 15.99,
          bonusPoints: 25,
          img: require("../../assets/image4-1.jpeg"),
        },
        discountPercentage: 30, // Example discount percentage
      },
      {
        product: {
          id: 7,
          name: "Chicken Parmesan",
          info: "Breaded chicken topped with marinara sauce and melted cheese",
          price: 14.99,
          bonusPoints: 22,
          img: require("../../assets/image1-1.png"),
        },
        discountPercentage: 15, // Example discount percentage
      },
      // Add more main course items here if needed
    ],
  },
  {
    title: "Desserts",
    data: [
      {
        product: {
          id: 9,
          name: "Chocolate Cake",
          info: "Rich chocolate cake with icing",
          price: 7.99,
          bonusPoints: 15,
          img: require("../../assets/image1-1.png"),
        },
        discountPercentage: 20, // Example discount percentage
      },
      {
        product: {
          id: 10,
          name: "Tiramisu",
          info: "Classic Italian dessert with coffee flavor",
          price: 9.99,
          bonusPoints: 18,
          img: require("../../assets/image2-1.jpeg"),
        },
        discountPercentage: 10, // Example discount percentage
      },
      {
        product: {
          id: 11,
          name: "Cheesecake",
          info: "Creamy cheesecake with a graham cracker crust",
          price: 8.99,
          bonusPoints: 16,
          img: require("../../assets/image3-1.jpeg"),
        },
        discountPercentage: 15, // Example discount percentage
      },
    ],
  },
];
