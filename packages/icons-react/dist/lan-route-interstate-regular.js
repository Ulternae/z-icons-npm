import React from 'react';

export const LanRouteInterstateRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64.1 192h383.3c-3.3 42-12.4 79.6-27.6 113.3C391 369 339 421.2 255.5 461.7c-84.6-37.1-136.4-89.1-164.6-153.4C75.7 273.8 67 235.1 64.1 192M272.7 6c-10.2-6.1-23-6.1-33.2 0-53.2 31.8-107 33.5-178.8 20-17.7-3.3-35 8.7-37.7 26.9C8 156.5 12.5 249.5 46.9 327.6c34.7 78.9 98.6 139.8 196.5 181.1 8.3 3.5 17.8 3.3 26-.5 95.4-44.7 158.9-105.4 194.1-183.2 34.9-77.2 40.4-168.5 25.5-272.2-2.6-18.2-19.9-30.2-37.7-26.9-71.8 13.5-125.6 11.8-178.8-20z"})
);

export default LanRouteInterstateRegular;
