
import { useState } from "react";
import type { ReactNode } from "react";
import { MAP_STYLES } from "../../constants/mapStyles";
import { MapStyleContext } from "./mapStyleContext.context";

type Props = {
  children: ReactNode;
};

export function MapStyleProvider({ children }: Props) {
  const [styleUrl, setStyleUrl] = useState<string>(MAP_STYLES.default);

  return (
    <MapStyleContext.Provider value={{ styleUrl, setStyleUrl }}>
      {children}
    </MapStyleContext.Provider>
  );
}