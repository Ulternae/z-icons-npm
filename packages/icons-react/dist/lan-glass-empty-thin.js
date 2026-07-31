import React from 'react';

export const LanGlassEmptyThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32.5 16c-9.3 0-16.7 8-15.9 17.3l34.7 425.9C53 480 70.4 496 91.2 496h202.6c20.8 0 38.2-16 39.9-36.8l34.7-425.9c.8-9.3-6.6-17.3-15.9-17.3zM.7 34.6C-.9 16 13.8 0 32.5 0h319.9c18.7 0 33.4 16 31.9 34.6l-34.7 426c-2.4 29.1-26.6 51.4-55.8 51.4H91.2c-29.2 0-53.4-22.4-55.8-51.4z"})
);

export default LanGlassEmptyThin;
