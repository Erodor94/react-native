import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const CalcDisplay = ({ text }) =>
    <View style={styles.display}>
        <Text>{text}</Text>
    </View>

const styles = StyleSheet.create({
    display: {
        backgroundColor: '#e3e3e3',
        padding: 20
    }
})

export default CalcDisplay