import React from 'react';

export const CoreBatteryThreeQuarters = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zM64 384h416V128H64zm576-32h-64V160h64zm-260-4H100V164h280zm-224-56h168v-72H156z"})
);

export default CoreBatteryThreeQuarters;
