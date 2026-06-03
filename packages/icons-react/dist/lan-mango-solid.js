import React from 'react';

export const LanMangoSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 64V48c0-44.2 35.8-80 80-80h96c8.8 0 16 7.2 16 16V0c0 44.2-35.8 80-80 80h-64v18.5c99.5 15.6 176 101.6 176 205.5 0 114.9-93.1 208-208 208H98.3C44 512 0 468 0 413.7c0-19.3 5.7-38.3 16.5-54.5l113.8-170.6c35.7-53.5 94.1-87.3 157.7-92zm144 232c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 48.6-39.4 88-88 88-13.3 0-24 10.7-24 24s10.7 24 24 24c75.1 0 136-60.9 136-136"})
);

export default LanMangoSolid;
