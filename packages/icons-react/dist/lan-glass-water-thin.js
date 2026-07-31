import React from 'react';

export const LanGlassWaterThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16.6 33.3C15.8 24 23.2 16 32.5 16h319.9c9.3 0 16.7 8 15.9 17.3L359 147.5l-37.8 17.2c-24.6 11.2-53.3 8.3-75.2-7.6-31.9-23.2-75.2-23.2-107.1 0-21.9 15.9-50.6 18.8-75.2 7.6l-37.8-17.2zm10.8 132.5 29.7 13.5c29.9 13.6 64.7 10 91.2-9.3 26.3-19.1 62-19.1 88.3 0 26.5 19.3 61.4 22.8 91.2 9.3l29.7-13.5-23.9 293.5c-1.7 20.8-19 36.8-39.9 36.8L91.2 496c-20.8 0-38.2-16-39.9-36.8zM32.5 0C13.8 0-.9 16 .7 34.6l34.7 426c2.3 29 26.6 51.4 55.8 51.4h202.6c29.2 0 53.4-22.4 55.8-51.4l34.7-426C385.8 16 371.1 0 352.4 0z"})
);

export default LanGlassWaterThin;
