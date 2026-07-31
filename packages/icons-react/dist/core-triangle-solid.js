import React from 'react';

export const CoreTriangleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 32c10.7 0 20.7 5.3 26.6 14.2l256 384c6.5 9.8 7.2 22.4 1.6 32.8s-16.4 17-28.2 17H32c-11.8 0-22.7-6.5-28.2-16.9s-4.9-23 1.6-32.8l256-384 2.4-3.2c6-7 14.9-11.1 24.2-11.1"})
);

export default CoreTriangleSolid;
