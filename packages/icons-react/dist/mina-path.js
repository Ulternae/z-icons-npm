import React from 'react';

export const MinaPath = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M8.121 15.879a3 3 0 1 0-4.243 4.243 3 3 0 0 0 4.243-4.243m0 0L15.88 8.12m0 0a3 3 0 1 0 4.243-4.243A3 3 0 0 0 15.88 8.12m0 0 .004-.004"})
);

export default MinaPath;
