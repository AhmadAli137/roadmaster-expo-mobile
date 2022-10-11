import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons, Octicons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { OrdersScreen, ScreenOne } from '../features/MainScreens/OrdersScreen';
import { ScreenTwo } from '../features/MainScreens/ScreenTwo';
import { ProfileScreen } from '../features/MainScreens/ProfileScreen';
import { MapsScreen } from '../features/MainScreens/MapsScreen';


export const MainNavigator = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Maps"
      screenOptions={{
        tabBarActiveTintColor: '#3385ff',
        headerStyle: { backgroundColor: '#3385ff' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Tab.Screen
        name="Maps"
        component={MapsScreen}
        options={{
          tabBarLabel: 'Maps',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color, size }) => (
            <Octicons name="checklist" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen Two"
        component={ScreenTwo}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}