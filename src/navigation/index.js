import {createNativeStackNavigator} from'@react-navigation/native-stack';
import Login from '../screens/Login';
import Categories from '../screens/Categories';
import ElementsList from '../screens/ElementsList';
import ElementDetail from '../screens/ElementDetail';







const Stack=createNativeStackNavigator();




const RootNavigation =()=>{

    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Categories" component={Categories}/>
            <Stack.Screen name="ElementsList" component={ElementsList}/>
            <Stack.Screen name="ElementDetail" component={ElementDetail}/>


        </Stack.Navigator>
    );
}

export default RootNavigation;