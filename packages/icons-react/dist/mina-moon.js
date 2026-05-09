import React from 'react';

export const MinaMoon = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"none","stroke":"currentColor","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"1.5","d":"M21 12.808c-.5 5.347-5.849 9.14-11.107 7.983C-.078 18.6 1.15 3.909 11.11 3 6.395 9.296 14.619 17.462 21 12.808"})
);

export default MinaMoon;
