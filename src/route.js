import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/Home'
import Blog from './blog/components/Blog'
import Calc from './calc/components/Calc'
import BlogDetails from './blog/components/BlogDetails'

export default createStackNavigator({
    Home,
    Blog,
    BlogDetails,
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

export const ROUTES = {
    Home: 'Home',
    Blog: 'Blog',
    BlogDetails: 'BlogDetails',
    Calculator: 'Calc'
}
