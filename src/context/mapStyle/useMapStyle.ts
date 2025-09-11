import { useContext } from "react";
import { MapStyleContext } from './mapStyleContext.context';

export function useMapStyle() {
  const context = useContext(MapStyleContext);
  if (!context) {
    throw new Error("useMapStyle must be used within a MapStyleProvider");
  }
  return context;
}
