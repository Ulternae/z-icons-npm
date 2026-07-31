import React from 'react';

export const MinaToggleRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M8 6.25a5.75 5.75 0 1 0 0 11.5h8a5.75 5.75 0 0 0 0-11.5zM12.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"})
);

export default MinaToggleRightSolid;
