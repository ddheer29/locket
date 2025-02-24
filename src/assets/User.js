import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
const UserSVG = props => (
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
    className="lucide lucide-circle-user-round"
    {...props}>
    <Path d="M18 20a6 6 0 0 0-12 0" />
    <Circle cx={12} cy={10} r={4} />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);
export default UserSVG;
