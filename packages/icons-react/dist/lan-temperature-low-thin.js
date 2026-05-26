import React from 'react';

export const LanTemperatureLowThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 96c0-44.2 35.8-80 80-80s80 35.8 80 80v168.3c0 2.3 1 4.6 2.8 6.1 27.7 23.5 45.2 58.5 45.2 97.6 0 70.7-57.3 128-128 128S32 438.7 32 368c0-39.1 17.5-74.1 45.2-97.6 1.8-1.5 2.8-3.8 2.8-6.1zm80-96c-53 0-96 43-96 96v164.7C34.6 287 16 325.4 16 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-42.6-18.6-81-48-107.3V96c0-53-43-96-96-96m-48 368a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0c0-32.6-24.4-59.6-56-63.5V280c0-4.4-3.6-8-8-8s-8 3.6-8 8v24.5c-31.6 3.9-56 30.9-56 63.5 0 35.3 28.7 64 64 64s64-28.7 64-64M336 64a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"})
);

export default LanTemperatureLowThin;
