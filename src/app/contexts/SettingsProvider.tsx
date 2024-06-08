import { ReactNode, useState } from "react";
import { MatxLayoutSettings } from "../components/MatxLayout/settings";
import merge from "lodash/merge";
import { SettingsContext } from "./SettingsContext";

type SettingsProviderProps = {
  settings?: any; // Change the type to match your settings type
  children: ReactNode; // Specify children prop as ReactNode type
};
export default function SettingsProvider({
  settings,
  children,
}: SettingsProviderProps) {
  const [currentSettings, setCurrentSettings] = useState(
    settings || MatxLayoutSettings
  );

  const handleUpdateSettings = (update: any = {}) => {
    const marged = merge({}, currentSettings, update);
    setCurrentSettings(marged);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        updateSettings: handleUpdateSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
