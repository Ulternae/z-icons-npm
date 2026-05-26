import React from 'react';

export const LanUpLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64.5 64h272c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-78.1 78.1 137.4 137.4c18.7 18.7 18.7 49.1 0 67.9l-48 48c-18.7 18.7-49.1 18.7-67.9 0L165.2 312.6l-78.1 78c-9.2 9.2-22.9 11.9-34.9 6.9S32.5 380.9 32.5 368V96c0-17.7 14.3-32 32-32"})
);

export default LanUpLeftSolid;
