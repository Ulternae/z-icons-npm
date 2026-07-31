import React from 'react';

export const MinaArrowLongDownRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M4.47 4.47a.75.75 0 0 0 0 1.06l10.625 10.625L12.25 19c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75l-2.845 2.845L5.53 4.47a.75.75 0 0 0-1.06 0"})
);

export default MinaArrowLongDownRightSolid;
