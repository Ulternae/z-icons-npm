import React from 'react';

export const CoreWifi = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m201.3 393.2 86.8 86.8 86.8-86.8c-20.5-25.1-51.8-41.2-86.8-41.2s-66.3 16.1-86.8 41.2m-52.6-52.6c32.2-41.7 82.7-68.6 139.4-68.6s107.2 26.9 139.4 68.6L473 295c-44-53.2-110.5-87-185-87s-140.9 33.9-185 87l45.5 45.5zM46.3 238.3C105 170.7 191.6 128 288.1 128s183 42.7 241.7 110.3l45.4-45.3c-70.4-79.2-173-129-287.1-129S71.3 113.8 1 192.9l45.3 45.3z"})
);

export default CoreWifi;
