import { LOCATIONS } from "../constants/mapStyles";

export function addLocationsSourceAndLayers(map: mapboxgl.Map, pinColor: string) {
  map.addSource("locations", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: LOCATIONS.map((loc) => ({
        type: "Feature",
        properties: { id: loc.id, name: loc.name },
        geometry: {
          type: "Point",
          coordinates: loc.coordinates,
        },
      })),
    },
  });

  map.addLayer({
    id: "locations-layer",
    type: "circle",
    source: "locations",
    paint: {
      "circle-radius": 8,
      "circle-color": pinColor, // Dynamic pin color
      "circle-stroke-width": 2,
      "circle-stroke-color": "#ffffff",
    },
  });

  map.addLayer({
    id: "locations-labels",
    type: "symbol",
    source: "locations",
    layout: {
      "text-field": ["get", "name"],
      "text-size": 12,
      "text-offset": [0, 1.5],
      "text-anchor": "top",
    },
    paint: {
      "text-color": "#000000",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1,
    },
  });
}
