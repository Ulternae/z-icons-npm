import React from 'react';

export const MinaChevronUpDownSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M12.53 3.47a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 0 1.06h9.06a.75.75 0 0 0 0-1.06zm4 13.06a.75.75 0 0 0 0-1.06H7.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06 0z"})
);

export default MinaChevronUpDownSolid;
