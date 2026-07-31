import React from 'react';

export const MinaLetterK = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M9 7v5m0 0v5m0-5h.625m0 0 5.625 5m-5.625-5 5.625-5"})
);

export default MinaLetterK;
