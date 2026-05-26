import React from 'react';

export const LanWhaleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M175.8 13.4c-1-5.9-5.2-10.8-10.9-12.6s-12-.3-16.2 3.9L108 45.4a80.06 80.06 0 0 0-22.4 69.7l7.9 47.4-49.9 49.9C15.7 240.3 0 278.2 0 317.6 0 407.3 72.7 480 162.4 480H544c53 0 96-43 96-96V272.1c0-79.6-64.5-144.1-144.1-144.1-82.5 0-162.4 29.5-225 83.2l-114.5 98.2c-8 6.8-18.1 10.6-28.6 10.6h-1.1c-18.3 0-34.5-11.7-40.3-29-4-12-2.4-25.2 4.3-35.9l37.6-60.1 44.7 7.5c25.5 4.2 51.5-4.1 69.7-22.3l40.7-40.7c4.2-4.2 5.8-10.5 3.9-16.2s-6.7-9.9-12.6-10.9L190 98.3l-14.1-84.7zM400 280a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanWhaleSolid;
