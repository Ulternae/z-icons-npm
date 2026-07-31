import React from 'react';

export const CoreArrowPointerSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-4 -4.3 516.3 516.4',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m59 17.8 424.3 149.3c17.4 6.1 29 22.5 29 41 0 18.1-11.2 34.3-28.2 40.7l-171 64.1-64.1 171c-6.4 16.9-22.6 28.2-40.7 28.2-18.4 0-34.9-11.6-41-29L18.2 58.6-4-4.3z"})
);

export default CoreArrowPointerSolid;
