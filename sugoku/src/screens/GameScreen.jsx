import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import BoxComponent from "../components/boxComponents"

export default function GameScreen({ navigation, route }) {

    const { name } = route.params

    function goToHome() {
        navigation.navigate("Home")
    }

    return(
        <View style={styles.container}>
            <Text>Gesst {name}</Text>
            <Button 
                onPress={() => goToHome()}
                title="Home"
                color="#841584"
            />
            <BoxComponent/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    }
})