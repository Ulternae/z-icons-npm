import React from 'react';

export const LanPeopleSimpleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128.1 128a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-32 32c-35.3 0-64 28.7-64 64v64c0 23.7 12.9 44.4 32 55.4V464c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V343.4c19.1-11.1 32-31.7 32-55.4v-64c0-35.3-28.7-64-64-64zm288-32a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0 32c-37.9 0-71.2 25.1-81.6 61.5l-34.7 121.7c-5.8 20.4 9.5 40.8 30.8 40.8h21.6v80c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-80h21.6c21.3 0 36.6-20.3 30.8-40.8l-34.9-121.7C455.3 185.1 422 160 384.1 160"})
);

export default LanPeopleSimpleSolid;
