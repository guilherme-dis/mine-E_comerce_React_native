import { StatusBar } from "expo-status-bar";
import Routes from "./src/Routes";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import TelaPadrao from "./src/components/TelaPadrao";
export default function App() {
  return (
    <TelaPadrao>
      <Routes />
    </TelaPadrao>
  );
}
