
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { useMapStyle } from "../../context/mapStyle/useMapStyle";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "../../constants/mapStyles";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const MapView: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const { styleUrl } = useMapStyle();

  useEffect(() => {
    if (!mapRef.current && mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: styleUrl,
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });
    }
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setStyle(styleUrl);
    }
  }, [styleUrl]);

  return <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default MapView;
