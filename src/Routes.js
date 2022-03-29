import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Servicos from "./screens/Servicos";
import Carrinho from "./screens/Carrinho";
import { cores } from "./styles";
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: cores.roxo,
          tabBarStyle:{
              height: 30,
          },
          tabBarInactiveTintColor: cores.claro,
          tabBarActiveBackgroundColor:cores.roxo,
        
          tabBarInativeBackgroundColor:cores.roxo,
          tabBarLabelStyle: {
            width: "100%",
            flex: 1,
            paddingTop:21,
            backgroundColor:cores.laranja,
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 21,
          },
          tabBarHideOnKeyboard:true,
        }}
      >
        <Tab.Screen name="Servicos" component={Servicos} />
        <Tab.Screen name="Carrinho " component={Carrinho} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
