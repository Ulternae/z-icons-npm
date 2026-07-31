import React from 'react';

export const CoreHeartHalfSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 521.7',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M65.8 77.8c61.1-61.1 160.2-61.1 221.2 0l1.4 1.4v442.5L65.8 299.1C4.7 238 4.7 138.9 65.8 77.8"})
);

export default CoreHeartHalfSolid;
