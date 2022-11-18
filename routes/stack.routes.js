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
                    headerStyle: {
                        backgroundColor: '#262621',
                      },
                      headerTintColor: '#fff'
                }}
            />
            <Screen
                name="Info"
                component={About}
                options={{
                    headerStyle: {
                        backgroundColor: '#262621',
                      },
                      headerTintColor: '#fff'
                }}
            />
        </Navigator>
    )
}