import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FabButton } from '../components/FabButton';

export const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador {counter}
            </Text>

            <FabButton onPress={() => {
                setCounter(counter + 1)
            }}
                text='+1'
                location="right"
            />
            <FabButton onPress={() => {
                setCounter(counter - 1)
            }}
                text='-1'
                location="left"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 40,
        top: -15
    },


});