import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from './stack.routes';

export function Routes() {
    return (
        <NavigationContainer Style={{ backgroundColor: '#2196F3' }}>
            <StackRoutes Style={{ backgroundColor: '#2196F3' }}/>
        </NavigationContainer>
    )
}