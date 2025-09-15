import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "../constants/mapStyles";
import { addLocationsSourceAndLayers } from "../utils/mapUtils";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export function useMap(
  styleUrl: string,
  // containerRef: React.RefObject<HTMLDivElement | null>,
  containerRef: React.RefObject<HTMLDivElement | null>,
  colors: { pinColor: string },
  featureColors: {
    colorAdminBoundaries?: string;
    colorGreenspace?: string;
    colorWater?: string;
    colorPlaceLabels?: string;
    colorRoadLabels?: string;
    colorPointOfInterestLabels?: string;
    colorMotorways?: string;
    colorTrunks?: string;
    colorRoads?: string;
  }
) {
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current && containerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: containerRef.current,
        style: styleUrl,
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        config: {
          basemap: {
            colorAdminBoundaries: featureColors.colorAdminBoundaries,
            colorGreenspace: featureColors.colorGreenspace,
            colorWater: featureColors.colorWater,
            colorPlaceLabels: featureColors.colorPlaceLabels,
            colorRoadLabels: featureColors.colorRoadLabels,
            colorPointOfInterestLabels: featureColors.colorPointOfInterestLabels,
            colorMotorways: featureColors.colorMotorways,
            colorTrunks: featureColors.colorTrunks,
            colorRoads: featureColors.colorRoads,
          },
        },
      });

      mapRef.current.on("load", () => {
        addLocationsSourceAndLayers(mapRef.current!, colors.pinColor);
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [styleUrl, containerRef, colors, featureColors]);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;

      const updateLayerColors = () => {
        if (!map.isStyleLoaded()) {
          console.log("Style is not fully loaded yet.");
          return;
        }

        const style = map.getStyle();
        if (!style || !style.layers) {
          console.log("No layers found in the current style.");
          return;
        }

        const layerColorMapping = {
          water: featureColors.colorWater,
          landuse: featureColors.colorGreenspace,
          "national-park": featureColors.colorGreenspace,
          road: featureColors.colorRoads,
          "admin-0-boundary": featureColors.colorAdminBoundaries,
          "admin-1-boundary": featureColors.colorAdminBoundaries,
          poi_label: featureColors.colorPointOfInterestLabels,
        };

        style.layers.forEach((layer) => {
          const color = layerColorMapping[layer.id];
          if (color) {
            if (layer.type === "fill") {
              map.setPaintProperty(layer.id, "fill-color", color);
            } else if (layer.type === "line") {
              map.setPaintProperty(layer.id, "line-color", color);
            } else if (layer.type === "symbol") {
              map.setPaintProperty(layer.id, "text-color", color);
            }
          }
        });
      };

      // Update colors when the style changes
      map.on("styledata", updateLayerColors);

      // Update colors initially
      map.on("style.load", updateLayerColors);

      return () => {
        map.off("styledata", updateLayerColors);
        map.off("style.load", updateLayerColors);
      };
    }
  }, [featureColors, styleUrl]); // Added styleUrl as a dependency

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;

      const logStyleDetails = () => {
        if (!map.isStyleLoaded()) {
          console.log("Style is not fully loaded yet.");
          return;
        }

        const style = map.getStyle();
        console.log("Current style object:", style);

        if (style && style.layers) {
          const waterLayer = style.layers.find((layer) => layer.id === "water");
          if (waterLayer) {
            console.log("Water layer details:", waterLayer);
          } else {
            console.log("No water layer found in the current style.");
          }
        }
      };

      // Log style details when the style changes
      map.on("styledata", logStyleDetails);

      // Log style details initially when the style is fully loaded
      map.on("style.load", logStyleDetails);

      return () => {
        map.off("styledata", logStyleDetails);
        map.off("style.load", logStyleDetails);
      };
    }
  }, [styleUrl]); // Added styleUrl as a dependency

  return mapRef;
}
