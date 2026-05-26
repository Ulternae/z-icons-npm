import React from 'react';

export const LanChartScatter3dSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m256-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v209L43.5 423.4c-13.6 11.3-15.4 31.5-4.1 45.1s31.5 15.4 45.1 4.1L256 329.7l171.5 142.9c13.6 11.3 33.8 9.5 45.1-4.1s9.5-33.8-4.1-45.1L288 273zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32 160a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-320-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m192 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanChartScatter3dSolid;
