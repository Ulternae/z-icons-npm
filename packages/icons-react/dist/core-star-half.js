import React from 'react';

export const CoreStarHalf = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m288.4 140-27.9 54.3c-10.5 20.3-29.9 34.5-52.5 38.2l-60.3 9.8 43 43.3c16.1 16.2 23.6 39.2 20.1 61.8l-9.3 60.3 54.5-27.5 3.9-1.8c9.1-3.9 18.9-5.9 28.6-5.9v64c-1.2 0-2.5.3-3.6.8L119.1 521l28.4-183.4c.4-2.5-.4-5.1-2.2-6.9L14.5 199l183.2-29.7c1.9-.3 3.6-1.3 4.8-2.7l1.1-1.5L288.4 0z"})
);

export default CoreStarHalf;
