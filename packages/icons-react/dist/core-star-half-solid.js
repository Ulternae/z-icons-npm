import React from 'react';

export const CoreStarHalfSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M373.2 165.1c1.2 2.3 3.3 3.8 5.8 4.2L562.3 199 431.5 330.7c-1.8 1.8-2.6 4.4-2.2 6.9L457.7 521 292 437.3c-2.3-1.1-5-1.1-7.2 0L119.1 521l28.4-183.4c.4-2.5-.4-5.1-2.2-6.9L14.5 199l183.3-29.7c1.9-.3 3.6-1.3 4.8-2.7l1.1-1.5L288.5 0l84.8 165.1zm-84.8 207.4c11.1 0 22.3 2.5 32.5 7.7l54.5 27.5-9.3-60.3c-3.5-22.6 3.9-45.6 20.1-61.8l43-43.3-60.2-9.8c-22.6-3.7-42.1-17.8-52.5-38.2L288.6 140v232.4z"})
);

export default CoreStarHalfSolid;
