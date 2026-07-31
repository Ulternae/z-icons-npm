import React from 'react';

export const LanLampStreet = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 168C32 92.9 92.9 32 168 32c72.7 0 132 57 135.8 128.7-83.1 6.9-151.1 66.7-170.3 145.6-6.2 25.5 14.8 45.7 37.5 45.7h70.6c7.4 36.5 39.7 64 78.4 64s71-27.5 78.4-64H469c22.7 0 43.7-20.2 37.5-45.7-19.3-79-87.4-138.9-170.7-145.7C332 71.3 258.3 0 168 0 75.2 0 0 75.2 0 168v328c0 8.8 7.2 16 16 16s16-7.2 16-16zm288 24c75.2 0 138.4 51.9 155.4 121.9.3 1.4 0 2.6-1 3.8-1.1 1.3-3 2.3-5.5 2.3h-298c-2.4 0-4.4-1-5.5-2.3-1-1.1-1.3-2.4-1-3.8 17.1-70 80.2-121.9 155.4-121.9zm0 192c-20.9 0-38.7-13.4-45.3-32h90.5c-6.6 18.6-24.4 32-45.3 32z"})
);

export default LanLampStreet;
