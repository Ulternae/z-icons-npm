import React from 'react';

export const MinaCornerRightDownSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M19.517 14.763a.75.75 0 0 0 .027-1.06h-4.821V9a4.75 4.75 0 0 0-4.75-4.75H5a.75.75 0 0 0 0 1.5h4.973A3.25 3.25 0 0 1 13.223 9v4.703H8.402a.75.75 0 0 0 .027 1.06l5.027 4.78a.75.75 0 0 0 1.034 0z"})
);

export default MinaCornerRightDownSolid;
