import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './store/store';
import PokemonScreen from './screens/PokemonScreen';
import TypeScreen from './screens/TypeScreen';
import NotFoundScreen from './screens/NotFoundScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen
              name='Pokemon'
              component={PokemonScreen}
              options={{ presentation: 'modal' }}
            />
            <Stack.Screen name='Type' component={TypeScreen} />
            <Stack.Screen name='NotFound' component={NotFoundScreen} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  );
}
