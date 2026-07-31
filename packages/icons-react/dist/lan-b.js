import React from 'react';

export const LanB = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48v416c0 8.8 7.2 16 16 16h176c70.7 0 128-57.3 128-128 0-52.8-32-98.2-77.7-117.7C270 213.9 288 181.1 288 144c0-61.9-50.1-112-112-112zm176 224c53 0 96 43 96 96s-43 96-96 96H32V256zm-16-32H32V64h144c44.2 0 80 35.8 80 80s-35.8 80-80 80"})
);

export default LanB;
