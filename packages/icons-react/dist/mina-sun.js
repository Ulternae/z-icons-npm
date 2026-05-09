import React from 'react';

export const MinaSun = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"none","stroke":"currentColor","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"1.5","d":"M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4-9v2m0 14.004v2M5 12H3m18 0h-2m0-7-2 2M5 5l2 2m0 10-2 2m14 0-2-2"})
);

export default MinaSun;
