import React from 'react';

export const MinaMaximizeOne = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M14 4h6v6M10 20H4v-6M20 4l-6 6M4 20l6-6"})
);

export default MinaMaximizeOne;
