import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RootLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="bluetooth"
                options={{
                    title: "Bluetooth",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "bluetooth" : "bluetooth-outline"}
                            size={24}
                            color="blue"
                        />
                    ),
                }}
            />

            
        </Tabs>
    );
}