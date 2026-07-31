import React from 'react';

export const MinaArrowLongUpRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M4.47 19.53a.75.75 0 0 1 0-1.06L15.095 7.845 12.25 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75l-2.845-2.845L5.53 19.53a.75.75 0 0 1-1.06 0"})
);

export default MinaArrowLongUpRightSolid;
