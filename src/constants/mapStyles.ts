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

export type Location = { id: string; name: string; coordinates: [number, number] };
export const LOCATIONS: Location[] = [
  { id: "loc1", name: "Home", coordinates: [74.31888157290686, 31.579706702646117] },
  { id: "loc2", name: "Office", coordinates: [74.38117716380727, 31.60760032598465] },
  { id: "loc3", name: "Café", coordinates: [74.28661397920213, 31.579706702646117] },
  { id: "loc4", name: "Park", coordinates: [74.37969329680607, 31.535785070046877] },
  {id: "loc5", name: "Highway", coordinates: [74.23065313955321, 31.57176819663708]},
];


export const DEFAULT_CENTER: [number, number] = [74.3140761707316, 31.480373679460428]; 
export const DEFAULT_ZOOM = 1.888011481773042;

export const PREDEFINED_COLORS = [
  { name: "Bright Red", color: "#ff0000" },
  { name: "Bright Purple", color: "#800080" },
  { name: "Bright Green", color: "#00ff00" },
  { name: "Bright Blue", color: "#0000ff" },
  { name: "Bright Orange", color: "#ffa500" },
];
