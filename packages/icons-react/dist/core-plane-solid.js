import React from 'react';

export const CorePlaneSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 640 576',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M576 192c35.3 0 64 28.7 64 64s-28.5 64-63.8 64H464.5L323.7 517.2c-12 16.8-31.4 26.8-52.1 26.8H159.5c3.1-7.3 35.1-81.9 96-224H144l-64 64H32c-17.7 0-32-14.3-32-32l32-96-32-96c0-17.7 14.3-32 32-32h48l64 64h111.5L178.6 12.6 159.5-32h112.1c20.7 0 40.1 10 52.1 26.8L464.5 192z"})
);

export default CorePlaneSolid;
