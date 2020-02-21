import React from 'react'
import { Text, StyleSheet, TouchableHighlight } from 'react-native'

const CalcButton = ({ text, handlePressButton, operator } ) =>
    <TouchableHighlight style={operator ? [styles.button, styles.operator] 
                                        : [styles.button]} 
                        onPress={() => handlePressButton(text)}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableHighlight>

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: 'blue',
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10,
        borderRadius: 50
    },
    operator: {
        backgroundColor: 'orange'
    },
    buttonText: {
        color: '#fff',
        padding: 10,
        textAlign: 'center',
    }
})

export default CalcButton