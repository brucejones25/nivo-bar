import React from "react";
import ReactDOM from "react-dom";

import { ResponsiveBar } from "@nivo/bar";
import { generateCountriesData } from "@nivo/generators";

import "./styles.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const keys = ["hot dogs", "burgers", "sandwich", "kebab", "fries", "donut"];
const commonProps = {
  margin: { top: 60, right: 80, bottom: 60, left: 80 },
  data: generateCountriesData(keys, { size: 7 }),
  indexBy: "country",
  keys,
  padding: 0.2,
  labelTextColor: "inherit:darker(1.4)",
  labelSkipWidth: 16,
  labelSkipHeight: 16
};

const App = () => (
  <div style={styles}>
    <h2>Start editing t see some magic happen {"\u2728"}</h2>
    <div style={{ height: 400 }}>
      <ResponsiveBar {...commonProps} />
    </div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
