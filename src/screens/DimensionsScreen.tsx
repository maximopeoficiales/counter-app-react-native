import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export const DimensionsScreen = () => {
    const { width, height } = Dimensions.get('window');

    return (
        <>
            <View style={styles.container}>
                <View style={{ ...styles.cajaMorada, width: width * 0.5 }}></View>
                <View style={styles.cajaNaranja}></View>
            </View>
            <Text style={styles.title}>W: {width}, H: {height}</Text>
        </>


    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200,
        backgroundColor: "red"
    },
    cajaMorada: {
        // width: "50%",
        height: "50%",
        backgroundColor: "purple",
    },
    cajaNaranja: {
        backgroundColor: "#F0A23B",
    },
    title: {
        fontSize: 30,
        textAlign: "center"
    }
});
