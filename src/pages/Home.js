import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { ROUTES } from '../routes/route'

class Home extends React.Component {
    static navigationOptions = {
      title: 'Página inicial'
    }
  
      render() {
        return <View style={styles.home}>
          <Button title='Calculadora' 
                  onPress={() => this.props.navigation.navigate(ROUTES.Calculator)} />

          <Button title='Blog' 
                  onPress={() => this.props.navigation.navigate(ROUTES.Blog)} />

          <Button title='FAQ' 
                  onPress={() => this.props.navigation.navigate(ROUTES.FAQ)} />
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