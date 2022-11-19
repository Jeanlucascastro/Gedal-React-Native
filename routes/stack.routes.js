import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import About from '../screens/About';
import Home from '../screens/Home';


export function StackRoutes() {
    return (
        <Navigator Style={{ backgroundColor: '#694fad' }}>

            <Screen
                name="Inicio"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name="Info"
                component={About}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}