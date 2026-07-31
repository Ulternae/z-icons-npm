import React from 'react';

export const LanObjectsAlignCenterHorizontal = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M240-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H48C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h160v64h-96c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h96v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h96c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-96v-64h160c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H240zm176 192c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16zm-64 224c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16z"})
);

export default LanObjectsAlignCenterHorizontal;
