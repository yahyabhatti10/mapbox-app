import { createContext } from "react";
import type { MapStyleContextType } from "./mapStyleContext.types";

export const MapStyleContext = createContext<MapStyleContextType | undefined>(
  undefined
);
