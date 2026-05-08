import React from 'react';

export const MinaTreeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M12.605 2.556a.75.75 0 0 0-1.21 0l-5.5 7.5A.75.75 0 0 0 6.5 11.25h1.569l-3.686 5.323A.75.75 0 0 0 5 17.75h6.25V21a.75.75 0 0 0 1.5 0v-3.25H19a.75.75 0 0 0 .617-1.177L15.93 11.25h1.57a.75.75 0 0 0 .605-1.194z"})
);

export default MinaTreeSolid;
