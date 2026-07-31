import React from 'react';

export const MinaWifiLowSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M7.47 15.627a6.407 6.407 0 0 1 9.06 0 .75.75 0 0 1-1.06 1.06 4.907 4.907 0 0 0-6.94 0 .75.75 0 1 1-1.06-1.06M12 18a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 12 18"})
);

export default MinaWifiLowSolid;
