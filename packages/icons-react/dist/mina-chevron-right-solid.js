import React from 'react';

export const MinaChevronRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M9.53 5.47a.75.75 0 0 0-1.06 0v13.06a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0 0-1.06z"})
);

export default MinaChevronRightSolid;
