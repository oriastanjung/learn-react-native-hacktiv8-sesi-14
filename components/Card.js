import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // height: 90,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,

    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  img: {
    width: "100%",
    height: 100,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  text: {
    color: "black",
    fontSize: 14,
    padding: 20,
  },
});

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.img}>
        <Image
          resizeMode="cover"
          style={styles.img}
          source={{ uri: props.img }}
        />
      </View>
      <Text style={styles.text}>{props.label}</Text>
    </View>
  );
};

export default Card;
