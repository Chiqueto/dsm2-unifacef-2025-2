import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import MeusCompromissos from "./screens/MeusCompromissos";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CompromissosEquipe from "./screens/CompromissosEquipe";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Meus Compromissos" component={MeusCompromissos} />
        <Stack.Screen
          name="Compromissos da Equipe"
          component={CompromissosEquipe}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
