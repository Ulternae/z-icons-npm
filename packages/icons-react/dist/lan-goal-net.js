import React from 'react';

export const LanGoalNet = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 32c44.2 0 80 35.8 80 80v352c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48v352c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-44.2 35.8-80 80-80zm-80 80c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v64h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v64h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-96v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-96v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64H96c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-64H96c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-64H96c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48l.3-3.2c1.5-7.3 8-12.8 15.7-12.8s14.2 5.5 15.7 12.8l.3 3.2v48h96v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h96v-48c0-8.8 7.2-16 16-16M176 368h96v-64h-96zm128 0h96v-64h-96zm-128-96h96v-64h-96zm128 0h96v-64h-96z"})
);

export default LanGoalNet;
