import React from 'react';

export const CoreStarSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M373.2 165.1c1.2 2.3 3.3 3.8 5.8 4.2L562.3 199 431.5 330.7c-1.8 1.8-2.6 4.4-2.2 6.9L457.7 521 292 437.3c-2.3-1.1-5-1.1-7.2 0L119.1 521l28.4-183.4c.4-2.5-.4-5.1-2.2-6.9L14.5 199l183.3-29.7c2.5-.4 4.7-2 5.8-4.2L288.4 0z"})
);

export default CoreStarSolid;
