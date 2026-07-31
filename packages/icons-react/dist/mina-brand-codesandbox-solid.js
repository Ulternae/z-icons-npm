import React from 'react';

export const MinaBrandCodesandboxSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M5.25 5.25h13.5v13.5H5.25zm1.5 1.5v10.5h10.5V6.75z"})
);

export default MinaBrandCodesandboxSolid;
