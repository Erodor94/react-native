import { Platform, StatusBar } from 'react-native'

if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('#F00') //android)
}
else { 
    StatusBar.setBarStyle('light-content') //ios
}
