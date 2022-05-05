import { Platform } from "../react-native-web";

export default {
    padding: 15,
    ...Platform.select({
        ios: { headerHeight: 64, headerPadding: 20 },
        android: { headerHeight: 44, headerPadding: 0  },
    }),
    tabBarHeifht: 50,
}