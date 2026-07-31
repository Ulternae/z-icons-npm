import React from 'react';

export const LanAppleCoreSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192.1 112c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16v16c0 44.2-35.8 80-80 80zM30.6 167c-8-6.5-9.3-18.7-.7-24.3 14.2-9.3 30.9-14.7 50.3-14.7 27.3 0 59.7 10.3 82.7 19.3 18.8 7.3 39.9 7.3 58.7 0 22.9-8.9 55.4-19.3 82.7-19.3 19.3 0 36.1 5.4 50.3 14.7 8.6 5.6 7.3 17.9-.7 24.3-40 32.3-65.5 81.7-65.5 137 0 54.4 24.7 103 63.4 135.3 7 5.9 8.8 16.3 2.7 23.1-28.3 31.3-63.2 49.6-98.1 49.6-16.5 0-38.1-6.6-51.5-11.3-8.1-2.8-16.9-2.8-25 0-13.4 4.7-35 11.3-51.5 11.3-34.9 0-69.8-18.3-98.1-49.6-6.2-6.8-4.4-17.3 2.7-23.1C71.8 407 96.4 358.4 96.4 304c0-55.4-25.6-104.7-65.5-137z"})
);

export default LanAppleCoreSolid;
