import { StyleSheet, StatusBar, View, Text} from "react-native";

export default function Home(){

    return (

        <View style={styles.container}>
            <Text>Tela Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});