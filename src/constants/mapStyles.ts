export type MapStyleKey =
  | "navigation"
  | "streets"
  | "default"
  | "dark"
  | "satellite";

export const MAP_STYLES: Record<MapStyleKey, string> = {
  navigation: "mapbox://styles/mapbox/navigation-day-v1",
  streets: "mapbox://styles/mapbox/streets-v11",
  default: "mapbox://styles/mapbox/standard",
  dark: "mapbox://styles/mapbox/dark-v11",
  satellite: "mapbox://styles/mapbox/satellite-streets-v12",
};

export const DEFAULT_CENTER: [number, number] = [74.3140761707316, 31.480373679460428]; 
export const DEFAULT_ZOOM = 10.888011481773042;
