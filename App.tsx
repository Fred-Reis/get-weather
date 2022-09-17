import { NativeBaseProvider, StatusBar } from "native-base";
import { AuthProvider } from "./src/hooks/useAuth";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider>
      <AuthProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Home />
        {/* {fontsLoaded === true ? <Routes /> : <Loading />} */}
      </AuthProvider>
    </NativeBaseProvider>
  );
}
