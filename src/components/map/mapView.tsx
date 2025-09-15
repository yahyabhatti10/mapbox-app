import React, { useRef, useState } from "react";
import { useMap } from "../../hooks/useMap";
import { useMapStyle } from "../../context/mapStyle/useMapStyle";
import { PREDEFINED_COLORS } from "../../constants/mapStyles";


const MapView: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const { styleUrl } = useMapStyle();
  const [selectedColor, setSelectedColor] = useState(PREDEFINED_COLORS[0].color);

  const featureColors = {
    colorAdminBoundaries: lightenColor(selectedColor, -20),
    colorGreenspace: lightenColor(selectedColor, -40),
    colorWater: selectedColor,
    colorPlaceLabels: lightenColor(selectedColor, -30),
    colorRoadLabels: lightenColor(selectedColor, -50),
    colorPointOfInterestLabels: lightenColor(selectedColor, -30),
    colorMotorways: lightenColor(selectedColor, -20),
    colorTrunks: lightenColor(selectedColor, -30),
    colorRoads: lightenColor(selectedColor, -50),
  };

  useMap(styleUrl, mapContainerRef, { pinColor: selectedColor }, featureColors);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 1000 }}>
        <fieldset style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
            Choose a color
          </label>
          <div>
            {PREDEFINED_COLORS.map((color, i) => (
              <button
                key={i}
                style={{
                  backgroundColor: color.color,
                  width: "36px",
                  height: "20px",
                  border: "none",
                  cursor: "pointer",
                  marginRight: "5px",
                }}
                onClick={() => setSelectedColor(color.color)}
              ></button>
            ))}
          </div>
        </fieldset>
      </div>
      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default MapView;

// Helper function to lighten or darken a color
function lightenColor(color: string, percent: number): string {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1)}`;
}
