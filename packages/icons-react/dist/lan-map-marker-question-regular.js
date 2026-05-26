import React from 'react';

export const LanMapMarkerQuestionRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 188.6C48 111.7 111.7 48 192 48s144 63.7 144 140.6c0 45.6-23.8 101.5-58.9 157.1-28.3 44.8-61 84.8-85.1 112.1-24.1-27.3-56.7-67.2-85.1-112.1C71.8 290.2 48 234.2 48 188.6M192 0C86 0 0 84.4 0 188.6c0 119.3 120.2 262.3 170.4 316.8 11.8 12.8 31.4 12.8 43.2 0C263.8 450.9 384 307.9 384 188.6 384 84.4 298 0 192 0m0 152c16.1 0 29.2 13.1 29.2 29.2 0 8.7-3.1 13.9-6.9 17.7-4.5 4.4-10.7 7.5-16.8 9.5-14.9 5-29.5 19.3-29.5 39.5 0 13.3 10.7 24 24 24 11.5 0 21.2-8.1 23.5-19 19.2-7.1 53.7-26.3 53.7-71.8 0-42.6-34.6-77.2-77.2-77.2s-77.2 34.6-77.2 77.2c0 13.3 10.7 24 24 24s24-10.7 24-24c0-16.1 13.1-29.2 29.2-29.2zm28 168a28 28 0 1 0-56 0 28 28 0 1 0 56 0"})
);

export default LanMapMarkerQuestionRegular;
