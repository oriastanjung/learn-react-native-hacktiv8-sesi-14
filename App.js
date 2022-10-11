import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import OuterContainer from "./components/OuterContainer";

export default function App() {
  const [search, setSearch] = useState("");
  const getFromHandleChange = (data) => {
    setSearch(data);
  };
  return (
    <OuterContainer style={styles.container}>
      <Navbar handleOnChange={getFromHandleChange} />
      <Text>{search}</Text>
      <ScrollView>
        <Card
          label={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ex mi. Suspendisse eu massa eu eros fermentum ullamcorper. Praesent et pretium neque. Mauris quis consequat felis, vitae fermentum eros. Vivamus ut tellus sit amet arcu pharetra condimentum at at elit. Duis vel blandit metus. Nunc vel mi volutpat ipsum vehicula bibendum vitae non ipsum. "
          }
          img={
            "https://i.pinimg.com/736x/c2/bf/74/c2bf74d9ef43bf24dcf73cde5a24f61c.jpg"
          }
        />
        <Card
          label={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ex mi. Suspendisse eu massa eu eros fermentum ullamcorper. Praesent et pretium neque. Mauris quis consequat felis, vitae fermentum eros. Vivamus ut tellus sit amet arcu pharetra condimentum at at elit. Duis vel blandit metus. Nunc vel mi volutpat ipsum vehicula bibendum vitae non ipsum. "
          }
          img={
            "https://i.pinimg.com/736x/c2/bf/74/c2bf74d9ef43bf24dcf73cde5a24f61c.jpg"
          }
        />
        <Card
          label={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ex mi. Suspendisse eu massa eu eros fermentum ullamcorper. Praesent et pretium neque. Mauris quis consequat felis, vitae fermentum eros. Vivamus ut tellus sit amet arcu pharetra condimentum at at elit. Duis vel blandit metus. Nunc vel mi volutpat ipsum vehicula bibendum vitae non ipsum. "
          }
          img={
            "https://i.pinimg.com/736x/c2/bf/74/c2bf74d9ef43bf24dcf73cde5a24f61c.jpg"
          }
        />
        <Card
          label={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ex mi. Suspendisse eu massa eu eros fermentum ullamcorper. Praesent et pretium neque. Mauris quis consequat felis, vitae fermentum eros. Vivamus ut tellus sit amet arcu pharetra condimentum at at elit. Duis vel blandit metus. Nunc vel mi volutpat ipsum vehicula bibendum vitae non ipsum. "
          }
          img={
            "https://i.pinimg.com/736x/c2/bf/74/c2bf74d9ef43bf24dcf73cde5a24f61c.jpg"
          }
        />
        <Card
          label={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ex mi. Suspendisse eu massa eu eros fermentum ullamcorper. Praesent et pretium neque. Mauris quis consequat felis, vitae fermentum eros. Vivamus ut tellus sit amet arcu pharetra condimentum at at elit. Duis vel blandit metus. Nunc vel mi volutpat ipsum vehicula bibendum vitae non ipsum. "
          }
          img={
            "https://i.pinimg.com/736x/c2/bf/74/c2bf74d9ef43bf24dcf73cde5a24f61c.jpg"
          }
        />
        <Card
          label={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ex mi. Suspendisse eu massa eu eros fermentum ullamcorper. Praesent et pretium neque. Mauris quis consequat felis, vitae fermentum eros. Vivamus ut tellus sit amet arcu pharetra condimentum at at elit. Duis vel blandit metus. Nunc vel mi volutpat ipsum vehicula bibendum vitae non ipsum. "
          }
          img={
            "https://i.pinimg.com/736x/c2/bf/74/c2bf74d9ef43bf24dcf73cde5a24f61c.jpg"
          }
        />
      </ScrollView>
    </OuterContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputDiv: {
    flex: 1,
    backgroundColor: "",
    padding: 15,
    color: "black",
    fontSize: 20,
    borderColor: "black",
    borderWidth: 2,
  },
  image: {
    width: 500,
    height: 100,
  },
  scrollViewDiv: {
    // height: 90,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "white",
    // borderRadius: 15,
    // shadowColor: "gray",
    // shadowOpacity: 1,
    // shadowRadius: 8,
    // elevation: 8,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // paddingLeft: 16,
    // paddingRight: 14,
    // marginTop: 6,
    // marginBottom: 6,
    // marginLeft: 16,
    // marginRight: 16,
  },
});
