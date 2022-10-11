import { View, Text, Platform, Dimensions, SafeAreaView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get("window").height * 0.05,
  },
});

const OuterContainer = (props) => {
  if (Platform.OS === "android") {
    return (
      <View style={[styles.container, { ...props.style }]}>
        {props.children}
      </View>
    );
  } else {
    return <SafeAreaView>{props.children}</SafeAreaView>;
  }
};

export default OuterContainer;
