import React from 'react';

export const LanSlidersSimple = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 416a48 48 0 1 1 0-96 48 48 0 1 1 0 96m78.4-64c-7.4-36.5-39.7-64-78.4-64-44.2 0-80 35.8-80 80s35.8 80 80 80c38.7 0 71-27.5 78.4-64H496c8.8 0 16-7.2 16-16s-7.2-16-16-16zM480 144a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-126.4-16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h337.6c7.4 36.5 39.7 64 78.4 64 44.2 0 80-35.8 80-80s-35.8-80-80-80c-38.7 0-71 27.5-78.4 64"})
);

export default LanSlidersSimple;
