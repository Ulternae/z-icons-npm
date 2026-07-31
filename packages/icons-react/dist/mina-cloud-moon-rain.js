import React from 'react';

export const MinaCloudMoonRain = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M4.424 19.556c-5.62-6.188 7.064-12.978 9.226-4.768 3.07 0 6.026 3.132 3.232 5.469M10.5 21v-1m3-1v-1m-6 1v-1M11 8.089C11 5.69 12.57 3.268 15.506 3c-2.62 3.498 1.948 8.034 5.494 5.449-.15 1.601-1.083 2.952-2.369 3.756"})
);

export default MinaCloudMoonRain;
