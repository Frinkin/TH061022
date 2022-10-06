import { StyleSheet, View, Image, Text } from "react-native";

export default function Home({ navigation }) {
    
    return (
      <View styles = {styles.main}>
        <Text>This is Home</Text>
        <Image styles = {styles.img} source={require("../../assets/starburst_stream.gif")} />
      </View>
    );
}
const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: "#f8f8ff",
      alignItems: "center",
      justifyContent: "center",
    },
    img:{
        height:120,
        width:"auto",
    }
  });