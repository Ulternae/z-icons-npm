import React from 'react';

export const CoreArrowUp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m448.3 301.3-160-160v338.8h-64V141.3l-160 160L19 256 233.6 41.4c12.5-12.5 32.8-12.5 45.3 0L493.5 256z"})
);

export default CoreArrowUp;
