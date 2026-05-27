import React from 'react';

export const CoreArrowRightFromLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 480H0V32h64zm438.6-246.6 2.2 2.4c10.2 12.6 9.5 31.1-2.2 42.8L352 429.2l-45.3-45.3 96-96H160v-64h242.7l-96-96L352 82.7l150.6 150.6z"})
);

export default CoreArrowRightFromLine;
