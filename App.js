import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExitScreen from "./scripts/screens/ExitScreen";
import HistoryScreen from "./scripts/screens/HistoryScreen";
import HomeScreen from "./scripts/screens/HomeScreen";
import NewEntryScreen from "./scripts/screens/NewEntryScreen";
import CameraOCRScreen from "./scripts/screens/CameraOCRScreen";
import LavadoScreen from "./scripts/screens/LavadoScreen";
import RecordatoriosScreen from "./scripts/screens/RecordatorioScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Nuevo Ingreso" component={NewEntryScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Registrar Egreso" component={ExitScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Historial" component={HistoryScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Escanear Patente" component={CameraOCRScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Lavados" component={LavadoScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Recordatorios" component={RecordatoriosScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}