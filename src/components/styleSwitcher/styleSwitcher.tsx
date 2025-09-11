import React from "react";
import { useMapStyle } from "../../context/mapStyle/useMapStyle";
import { MAP_STYLES } from "../../constants/mapStyles";
import Button from '../ui/Button/Button';
import "./styleSwitcher.css";

const StyleSwitcher: React.FC = () => {
  const { styleUrl, setStyleUrl } = useMapStyle();

  return (
    <div className="style-switcher">
      {Object.entries(MAP_STYLES).map(([key, url]) => (
        <Button
          key={key}
          onClick={() => setStyleUrl(url)}
          active={styleUrl === url}
        >
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </Button>
      ))}
    </div>
  );
};

export default StyleSwitcher;
