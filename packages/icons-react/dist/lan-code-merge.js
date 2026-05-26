import React from 'react';

export const LanCodeMerge = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96m16.9 126.2C133 150.5 160 118.4 160 80c0-44.2-35.8-80-80-80S0 35.8 0 80c0 38.7 27.5 71 64 78.4v195.2C27.5 361 0 393.3 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-38.7-27.5-71-64-78.4V234.5c26.4 32.6 66.8 53.5 112 53.5h81.6c7.4 36.5 39.7 64 78.4 64 44.2 0 80-35.8 80-80s-35.8-80-80-80c-38.7 0-71 27.5-78.4 64H208c-57 0-104.1-42.6-111.1-97.8M416 272a48 48 0 1 1-96 0 48 48 0 1 1 96 0M128 432a48 48 0 1 1-96 0 48 48 0 1 1 96 0"})
);

export default LanCodeMerge;
