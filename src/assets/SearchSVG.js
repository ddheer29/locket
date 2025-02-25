import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const SearchSVG = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgb(188, 187, 187)"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-search"
    {...props}>
    <Circle cx={11} cy={11} r={8} />
    <Path d="m21 21-4.3-4.3" />
  </Svg>
);
export default SearchSVG;
