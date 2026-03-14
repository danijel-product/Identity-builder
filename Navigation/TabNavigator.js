
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View,Text} from 'react-native';


import HomeScreen from "../Screens/HomeScreen";
import TabIcon from "../Components/TabIcon";
import design from '../design.json'
import OnBoardingOne from "../Screens/OnBoardingOne";
import ActionScreen from "../Screens/ActionScreen";
import AssessScreen from "../Screens/AssessScreen";
import Tooltip from "../Screens/Tooltip";

const Tab = createBottomTabNavigator();

export default function TabNavigator () {
    return (
        <Tab.Navigator screenOptions={{headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: design.colors.background,
                paddingTop: 8,
                alignItems: 'center',
                height: 56,
                gap: 72
            }
        }}>
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused}
                    icon={require('../assets/home-icon.png')}/>
                )
            }} />
            <Tab.Screen name="Action" component={ActionScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused}
                    icon={require('../assets/action-icon.png')}/>
                )
            }}/>
            <Tab.Screen name="Assess" component={AssessScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused}
                    icon={require('../assets/assess-icon.png')}/>
                )
            }}/>
            <Tab.Screen name="Tooltip" component={Tooltip}
            options={{
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused}
                    icon={require('../assets/tooltip.png')}/>
                )
            }}/>
        </Tab.Navigator>
    )
}
