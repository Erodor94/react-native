import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

class Home extends React.Component {
    static navigationOptions = {
      title: 'Página inicial'
    }
  
      render() {
        return <View style={styles.home}>
          <Button title='Calculadora' onPress={() => this.props.navigation.navigate('Calc')} />
          <Button title='Blog' onPress={() => this.props.navigation.navigate('Blog')} />
        </View>
    }
  }
  
  const styles = StyleSheet.create({
    home: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

  export default Home