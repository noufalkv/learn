import React from "react";
import { Text, View } from "react-native"
import { COLORS } from "../constants";
import { DrawerContentScrollView, createDrawerNavigator } from "@react-navigation/drawer";
import { MainLayout } from "../screens";

const Drawer = createDrawerNavigator();


const CustomDrawerContent = () => {
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{
                flex: 1,
                backgroundColor: COLORS.primary
            }}
        >  
        <Text>sss</Text>
        </DrawerContentScrollView>
    )
}
const CustomDrawer = () => {

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.primary
            }}
        >
            <Drawer.Navigator
                useLegacyImplementation={true}
                screenOptions={{
                    headerShown: false,
                    drawerType: 'slide',
                    overlayColor: 'transparent',
                    drawerStyle: {
                        flex: 1,
                        width: '60%',
                        paddingRight: 20,
                        backgroundColor: 'transparent'
                    },
                    screenContainerStyle: {
                        backgroundColor: 'transparent'
                    }
                }}
                initialRouteName="MainLayout"
                drawerContent={props => {
                    return (
                        <CustomDrawerContent 
                            //  navigation={props.navigation}
                        //     // selectedTab={selectedTab}
                        //     // setSelectedTab={setSelectedTab}
                         />
                       
                    )
                }
                }
            >
                <Drawer.Screen
                    name="MainLayout"
                >
                    {props => <MainLayout {...props} />}

                </Drawer.Screen>
            </Drawer.Navigator>

        </View >
    )
}
export default CustomDrawer;