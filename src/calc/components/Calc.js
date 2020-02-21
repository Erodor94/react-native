import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CalcButton from './CalcButton'
import CalcDisplay from '../CalcDisplay'

const Calc = ({ navigation }) => {

    const [leftNumber, setLeftNumber] = useState(0)
    const [display, setDisplay] = useState('')
    const [operator, setOperator] = useState('')

    const addDigit = (digit) => {
        if (operator && display == leftNumber) {
            setDisplay(digit)
        } else {
            setDisplay(display + digit)
        }
    } 

    const addOperator = (operator) => {
        setOperator(operator)
        setLeftNumber(display)
    }

    const finish = () => {
        const total = Number(leftNumber) + Number(display)
        
        setDisplay(total.toString())
        setLeftNumber(0)
        setOperator('')
    }

    const clear = () => {
        setDisplay('')
        setOperator('')
        setLeftNumber(0)
    }

    return <>

        <CalcDisplay text={display}  />

        <View style={styles.row}>
            <CalcButton text='AC' handlePressButton={clear} operator={true} />
        </View>

        <View style={styles.row}>
            <CalcButton text='1' handlePressButton={addDigit} />
            <CalcButton text='2' handlePressButton={addDigit} />
            <CalcButton text='3' handlePressButton={addDigit} />
        </View>

        <View style={styles.row}>
            <CalcButton text='4' handlePressButton={addDigit} />
            <CalcButton text='5' handlePressButton={addDigit} />
            <CalcButton text='6' handlePressButton={addDigit} />
        </View>

        <View style={styles.row}>
            <CalcButton text='7' handlePressButton={addDigit} />
            <CalcButton text='8' handlePressButton={addDigit} />
            <CalcButton text='9' handlePressButton={addDigit} />
        </View>

        <View style={styles.row}>
            <CalcButton text='0' handlePressButton={addDigit} />
            <CalcButton text='+' handlePressButton={addOperator} operator={true} />
            <CalcButton text='=' handlePressButton={finish} operator={true}  />
        </View>

    </>
}

Calc.navigationOptions = () => ({
    title: 'Calculadora'
})

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    }
})

export default Calc