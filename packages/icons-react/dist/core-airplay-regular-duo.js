import React from 'react';

export const CoreAirplayRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 96v256h92.1l99.9-99.9 99.9 99.9H448V96z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M64 96h384v256h-92.1l62.1 62.1 1.9 1.9H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v256c0 35.3 28.7 64 64 64h28.1l1.9-1.9 62.1-62.1H64zm192 303.2 56.8 56.8H199.2zm0-79.2L128 448v64h256v-64z"})
);

export default CoreAirplayRegular-duo;
