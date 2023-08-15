import BaseNavigation from "./navigation/baseNavigation";
import { StatusBar } from "react-native";
import { themeColors } from "./theme";


export default function App() {
  return (
    <>
      <StatusBar backgroundColor={themeColors.bg}
                // hidden={true}
                  />
      <BaseNavigation />
    </>
  );
}
