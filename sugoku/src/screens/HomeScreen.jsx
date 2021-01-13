import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { View, Text, StyleSheet, Button, TextInput } from "react-native"
import { setDifficult } from "../store/actions" 

export default function HomeScreen(props) {
    const [user, setUser] = useState("")

    const dispatch = useDispatch()

    function goToGamePlay(difficult) {
        // console.log(difficult, "ini data di home")
        dispatch(setDifficult(difficult))

        props.navigation.navigate("Game", {
            name: user
        })
    }

    function handleInputName(text) {
        // console.log(text, "ini name di function HOme");
        setUser(text)
    }

    return(
        <View style={styles.container}>
            <Text>
                Welcome, Please Input Your Name ! 
            </Text>
            <TextInput
            style={[styles.inputName]}
            onChangeText={text => handleInputName(text)}
            />
            <View style={styles.row}>
                <Button
                onPress={() => goToGamePlay('easy')}
                title="Easy"
                color="#841584"
                />
                <Button
                onPress={() => goToGamePlay('medium')}
                title="Medium"
                color="#841584"
                />
                <Button
                onPress={() => goToGamePlay('hard')}
                title="Hard"
                color="#841584"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        marginTop: "2%"
    },
    inputName: {
        backgroundColor: "white",
        width: 80,
        height: 30,
        borderWidth: 1,
        borderColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        fontSize: 20,
        padding: 0,
        margin: 1,
        alignSelf: 'center'
      }
})