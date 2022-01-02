import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    },
    title: {
        padding: 50,
        color: "white",
        fontSize: 20,
        borderWidth: 10,
        paddingHorizontal: 100,
        paddingVertical: 20,
        margin: 10
        // backgroundColor: "red"
    }
});

