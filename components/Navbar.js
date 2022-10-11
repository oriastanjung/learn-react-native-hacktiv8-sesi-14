import { View, Text, TextInput, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState } from "react";

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 100,
    justifyContent: "space-between",
    backgroundColor: "#9772FB",
    padding: 15,
  },
  text: {
    flex: 2,
    textAlign: "center",
  },
  inputDiv: {
    flex: 1,
    backgroundColor: "",
    paddingHorizontal: 10,
    color: "black",
    fontSize: 14,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    flex: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginRight: 20,
  },
});

const Navbar = (props) => {
  const [search, setSearch] = useState("");
  const handleChange = (text) => {
    setSearch(text);
    props.handleOnChange(text);
  };
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Heyyo Mama</Text>
      <TextInput
        value={search}
        onChangeText={handleChange}
        placeholder="Search Your Food"
        style={styles.inputDiv}
      />
    </View>
  );
};

export default Navbar;
