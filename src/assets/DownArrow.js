import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const DownArrow = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-down"
    {...props}>
    <Path d="m6 9 6 6 6-6" />
  </Svg>
);
export default DownArrow;
