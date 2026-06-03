import React from 'react';

export const LanMapMarkerSmileRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 515',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 188.6C48 111.7 111.7 48 192 48s144 63.7 144 140.6c0 45.6-23.8 101.5-58.9 157.1-28.3 44.8-61 84.8-85.1 112.1-24.1-27.3-56.7-67.2-85.1-112.1C71.8 290.2 48 234.2 48 188.6M192 0C86 0 0 84.4 0 188.6c0 119.3 120.2 262.3 170.4 316.8 11.8 12.8 31.4 12.8 43.2 0C263.8 450.9 384 307.9 384 188.6 384 84.4 298 0 192 0m-56 176a24 24 0 1 0 0-48 24 24 0 1 0 0 48m136-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-127.4 76.9c-6.1-9.2-18.5-11.7-27.7-5.5s-11.7 18.5-5.5 27.7c9.8 14.6 38.1 40.9 80.6 40.9s70.9-26.3 80.6-40.9c6.1-9.2 3.6-21.6-5.5-27.7s-21.6-3.6-27.7 5.5c-4.5 6.7-21.6 23.1-47.4 23.1s-42.9-16.4-47.4-23.1"})
);

export default LanMapMarkerSmileRegular;
