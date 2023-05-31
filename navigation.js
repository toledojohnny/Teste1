import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Importar as telas do aplicativo
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';

// Configurar a navegação em tabs
const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Profile: ProfileScreen,
});

// Criar o contêiner do aplicativo
const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;