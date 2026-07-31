import React from 'react';

export const LanSpaceStationMoon = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 256C32 132.3 132.3 32 256 32s224 100.3 224 224c0 14.8-1.4 29.3-4.2 43.3-2.1.7-4.2 1.5-6.5 2.3-36.3 13.1-99.5 35.8-213.3 35.8S79 314.7 42.7 301.6c-2.3-.8-4.4-1.6-6.5-2.3-2.7-14-4.2-28.5-4.2-43.3m224 113.4c104.8 0 169.6-18.7 208.8-32.3C432.3 420.7 351 479.9 256 479.9S79.7 420.8 47.2 337.2c39.2 13.6 104 32.3 208.8 32.3zM256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512M136 160a56 56 0 1 1 112 0 56 56 0 1 1-112 0m144 0a88 88 0 1 0-176 0 88 88 0 1 0 176 0m-88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanSpaceStationMoon;
