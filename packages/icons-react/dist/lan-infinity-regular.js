import React from 'react';

export const LanInfinityRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 237.3C0 159.3 63.3 96 141.3 96c39 0 76.2 16.1 102.9 44.5L320 221l75.8-80.5C422.5 112.1 459.7 96 498.7 96c78 0 141.3 63.3 141.3 141.3v37.4c0 78-63.3 141.3-141.3 141.3-39 0-76.2-16.1-102.9-44.5L320 291l-75.8 80.5c-26.7 28.4-63.9 44.5-102.9 44.5C63.3 416 0 352.7 0 274.7zM287 256l-77.8-82.6c-17.6-18.7-42.2-29.4-68-29.4-51.5 0-93.3 41.8-93.3 93.3v37.4c0 51.5 41.8 93.3 93.3 93.3 25.7 0 50.3-10.6 68-29.4zm65.9 0 77.8 82.6c17.6 18.7 42.2 29.4 68 29.4 51.5 0 93.3-41.8 93.3-93.3v-37.4c0-51.5-41.8-93.3-93.3-93.3-25.7 0-50.3 10.6-68 29.4L353 256z"})
);

export default LanInfinityRegular;
