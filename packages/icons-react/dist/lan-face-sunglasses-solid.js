import React from 'react';

export const LanFaceSunglassesSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512c141.4 0 256-114.6 256-256 0-20.9-2.5-41.1-7.2-60.5l1-8.9c4.8-43-19.5-81.9-56.4-98.4C402.5 34.1 333.2 0 256 0S109.6 34.2 62.6 88.2c-36.9 16.5-61.2 55.4-56.4 98.4l1 8.9C2.5 214.9 0 235.1 0 256c0 141.4 114.6 256 256 256m-89.3-240h-45.4c-32.6 0-60-24.5-63.6-56.9l-3.8-33.8C50.8 152.9 73 128 101.6 128h84.7c14.3 0 27 6.2 35.8 16h67.7c8.7-9.8 21.5-16 35.8-16h84.7c28.6 0 50.9 24.9 47.7 53.3l-3.8 33.8c-3.6 32.4-31 56.9-63.6 56.9h-45.4c-32.6 0-60-24.5-63.6-56.9L279 192h-46.2l-2.6 23.1c-3.6 32.4-31 56.9-63.6 56.9zm-1.3 65.9c20.4 28 53.4 46.1 90.6 46.1s70.2-18.1 90.6-46.1c7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.5C356.3 406 309.2 432 256 432s-100.3-26-129.4-65.9c-7.8-10.7-5.4-25.7 5.3-33.5s25.7-5.4 33.5 5.3"})
);

export default LanFaceSunglassesSolid;
