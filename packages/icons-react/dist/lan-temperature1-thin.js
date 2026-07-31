import React from 'react';

export const LanTemperature1Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 16c-44.2 0-80 35.8-80 80v168.3c0 2.3-1 4.6-2.8 6.1C49.5 293.9 32 328.9 32 368c0 70.7 57.3 128 128 128s128-57.3 128-128c0-39.1-17.5-74.1-45.2-97.6-1.8-1.5-2.8-3.7-2.8-6.1V96c0-44.2-35.8-80-80-80M64 96c0-53 43-96 96-96s96 43 96 96v164.7c29.4 26.4 48 64.7 48 107.3 0 79.5-64.5 144-144 144S16 447.5 16 368c0-42.6 18.6-81 48-107.3zm96 320c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48m0 16c-35.3 0-64-28.7-64-64 0-32.6 24.4-59.6 56-63.5V280c0-4.4 3.6-8 8-8s8 3.6 8 8v24.5c31.6 3.9 56 30.9 56 63.5 0 35.3-28.7 64-64 64"})
);

export default LanTemperature1Thin;
