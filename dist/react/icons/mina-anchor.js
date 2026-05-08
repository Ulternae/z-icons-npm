import React from 'react';

export const MinaAnchor = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"none","stroke":"currentColor","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"1.5","d":"M5 12H3a9 9 0 1 0 18 0h-2m-7-5v14m0-14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"})
);

export default MinaAnchor;
