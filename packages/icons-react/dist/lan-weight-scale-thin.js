import React from 'react';

export const LanWeightScaleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M339.8 198.6c7.8-16.5 12.2-35 12.2-54.6 0-70.7-57.3-128-128-128S96 73.3 96 144c0 19.6 4.4 38.1 12.2 54.6 2.5 5.3 8.8 9.4 17.4 9.4h92.6l30.2-90.5c1.4-4.2 5.9-6.5 10.1-5.1s6.5 5.9 5.1 10.1L235.1 208h87.3c8.6 0 14.9-4.1 17.4-9.4m14.5 6.8c-5.7 12.1-18.5 18.6-31.9 18.6H125.6c-13.3 0-26.2-6.5-31.9-18.6C84.9 186.8 80 165.9 80 144c0-36.9 13.9-70.5 36.7-96H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48h-52.7c22.8 25.5 36.7 59.1 36.7 96 0 22-4.9 42.8-13.7 61.4M64 32h69.5C158.2 12 189.7 0 224 0s65.8 12 90.5 32H384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64"})
);

export default LanWeightScaleThin;
