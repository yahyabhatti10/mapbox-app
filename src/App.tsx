import React from "react";
import MapView from "./components/map/mapView";
import StyleSwitcher from "./components/styleSwitcher/styleSwitcher";
import Card from "./components/ui/Card/Card";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <StyleSwitcher />
      <Card>
        <MapView />
      </Card>
    </div>
  );
};

export default App;
