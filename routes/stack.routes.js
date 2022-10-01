import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import About from '../screens/About';
import Home from '../screens/Home';


export function StackRoutes() {
    return (
        <Navigator>

            <Screen
                name="Inicio"
                component={Home}
            />
            <Screen
                name="Info"
                component={About}
            />
        </Navigator>
    )
}