import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export interface MyProps {
    onPress: () => void;
    location: "left" | "right";
    text: string
}
export const FabButton = ({ onPress, location, text }: MyProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={location == "left" ? styles.fabLocationLeft : styles.fabLocationRight}
        >
            <View
                style={styles.fab}>
                <Text style={styles.fabText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fabLocationRight: {
        position: "absolute",
        bottom: 20,
        right: 25,
    },
    fabLocationLeft: {
        position: "absolute",
        bottom: 20,
        left: 25,
    },
    fab: {
        backgroundColor: "#5856D6",
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    fabText: {
        color: "white",
        fontSize: 25,
    }

});