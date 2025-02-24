import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const MessageSVG = props => (
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
    className="lucide lucide-message-circle"
    {...props}>
    <Path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </Svg>
);
export default MessageSVG;
