import React from 'react';

export const MinaPathSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M18 9.75a3.74 3.74 0 0 1-2.068-.621l-6.803 6.803a3.75 3.75 0 1 1-1.06-1.06l6.802-6.804A3.75 3.75 0 1 1 18 9.75"})
);

export default MinaPathSolid;
