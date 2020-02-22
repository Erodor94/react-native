import { createStackNavigator } from 'react-navigation-stack';

import Home from '../pages/Home'
import Blog from '../blog/components/Blog'
import Calc from '../calc/components/Calc'
import BlogDetails from '../blog/components/BlogDetails'
import Faq from '../pages/Faq'

export default createStackNavigator({
    Home,
    Blog,
    BlogDetails,
    Faq,
    Calc: {
        screen: Calc
    }
},
    {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerStyle: { backgroundColor: '#F00' }
        }
    }
);