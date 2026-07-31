import React from 'react';

export const NeoRectangleVerticalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M196 0c-35.6 0-65.9 1.7-91.2 7.2C79.2 12.7 57 22.4 39.7 39.7s-27 39.5-32.5 65.1C1.7 130.1 0 160.4 0 196v168c0 35.6 1.7 65.9 7.2 91.2 5.5 25.6 15.2 47.8 32.5 65.1s39.5 27 65.1 32.5c25.3 5.5 55.7 7.2 91.2 7.2h56c35.6 0 65.9-1.7 91.2-7.2 25.6-5.5 47.8-15.2 65.1-32.5s27-39.5 32.5-65.1c5.5-25.3 7.2-55.7 7.2-91.2V196c0-35.6-1.7-65.9-7.2-91.2-5.5-25.6-15.2-47.8-32.5-65.1s-39.5-27-65.1-32.5C317.9 1.7 287.6 0 252 0z"})
);

export default NeoRectangleVerticalSolid;
