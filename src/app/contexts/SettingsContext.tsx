import { createContext } from "react";
import { MatxLayoutSettings } from "../components/MatxLayout/settings";

interface ISettingsContextType {
  settings: any;
  updateSettings: (update: any) => void;
}

export const SettingsContext = createContext<ISettingsContextType>({
  settings: MatxLayoutSettings,
  updateSettings: () => {},
});
