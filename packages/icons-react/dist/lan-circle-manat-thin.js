import React from 'react';

export const LanCircleManatThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-8-400v16.3c-58.1 4.1-104 52.6-104 111.7v120c0 4.4 3.6 8 8 8s8-3.6 8-8V240c0-50.3 38.7-91.6 88-95.7V360c0 4.4 3.6 8 8 8s8-3.6 8-8V144.3c49.3 4.1 88 45.3 88 95.7v120c0 4.4 3.6 8 8 8s8-3.6 8-8V240c0-59.2-45.9-107.6-104-111.7V112c0-4.4-3.6-8-8-8s-8 3.6-8 8"})
);

export default LanCircleManatThin;
