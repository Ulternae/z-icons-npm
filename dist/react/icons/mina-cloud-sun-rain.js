import React from 'react';

export const MinaCloudSunRain = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M4.424 19.556c-5.62-6.188 7.064-12.978 9.226-4.768 3.07 0 6.026 3.132 3.232 5.469M15 3v1.059M21 9h-1.059m-.706-4.235-.706.706m-7.764-.706.705.706m7.765 7.764-.706-.706M15.895 11A2.13 2.13 0 0 0 17 9.122C17 7.95 16.075 7 14.933 7A2.07 2.07 0 0 0 13 8.37M10.5 21v-1m3-1v-1m-6 1v-1"})
);

export default MinaCloudSunRain;
