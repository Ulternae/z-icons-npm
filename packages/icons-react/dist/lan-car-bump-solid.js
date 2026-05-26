import React from 'react';

export const LanCarBumpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m236.6 87.6-136.3 78.8c-5.8 3.3-8.9 9.9-7.8 16.5l12.2 73.3 207.5-119.8-57.4-47.2c-5.2-4.2-12.4-4.8-18.2-1.5zm138.7 17.8 2.8 2.3c22.4-.3 44.3 11.2 56.3 32q12 20.85 48 83.1l16 27.7c8.8 15.3 3.6 34.9-11.7 43.7l-13.9 8c-15.3 8.8-34.9 3.6-43.7-11.7l-16-27.7-249.4 144 16 27.7c8.8 15.3 3.6 34.9-11.7 43.7l-13.9 8c-15.3 8.8-34.9 3.6-43.7-11.7q-12-20.85-48-83.1l-16-27.7c-12-20.8-11-45.5.4-64.8l-.6-3.5-17-102c-5.5-32.9 10-65.7 38.9-82.4l136.5-78.8c28.9-16.7 65.1-13.7 90.8 7.5zm0 123.9a32 32 0 1 0-32-55.4 32 32 0 1 0 32 55.4M109.9 345.6a32 32 0 1 0 55.4-32 32 32 0 1 0-55.4 32m462 134.9c5 17-9.8 31.6-27.5 31.6h-160c-17.7 0-32.5-14.6-27.5-31.6 13.6-46.5 56.6-80.4 107.5-80.4s93.9 33.9 107.5 80.4"})
);

export default LanCarBumpSolid;
