import React from 'react';

export const MinaCornerLeftUpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M4.483 9.237a.75.75 0 0 0-.026 1.06h4.82V15a4.75 4.75 0 0 0 4.75 4.75H19a.75.75 0 0 0 0-1.5h-4.973a3.25 3.25 0 0 1-3.25-3.25v-4.703h4.821a.75.75 0 0 0-.027-1.06l-5.027-4.78a.75.75 0 0 0-1.034 0z"})
);

export default MinaCornerLeftUpSolid;
