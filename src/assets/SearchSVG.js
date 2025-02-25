import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SearchSVG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-search"
    {...props}
  >
    <Circle cx={11} cy={11} r={8} />
    <Path d="m21 21-4.3-4.3" />
  </Svg>
);
export default SearchSVG;
