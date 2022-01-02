import React from 'react'
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

export interface MyProps {
    onPress: () => void;
    location: "left" | "right";
    text: string
}
export const FabButton = ({ onPress, location, text }: MyProps) => {
    const IOS = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.75}
                style={[styles.fabLocation, location == "left" ? styles.left : styles.right]}
                onPress={onPress}
            >
                <View
                    style={styles.fab}>
                    <Text style={styles.fabText}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const Android = () => {
        return (
            <View
                style={[styles.fabLocation, location == "left" ? styles.left : styles.right]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple("#28425B", false, 30)}
                >
                    <View
                        style={styles.fab}>
                        <Text style={styles.fabText}>{text}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
    return Platform.OS == "ios" ? IOS() : Android();
}

const styles = StyleSheet.create({
    fabLocation: {
        position: "absolute",
        bottom: 20,
    },
    left: {
        left: 25,
    },
    right: {
        right: 25,
    },

    fab: {
        backgroundColor: "#5856D6",
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 8,
    },
    fabText: {
        color: "white",
        fontSize: 25,
    }

});