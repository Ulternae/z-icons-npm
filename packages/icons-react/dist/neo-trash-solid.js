import React from 'react';

export const NeoTrashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 504 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m106.1 73.6-5.8 45.5c-23-1.9-46-4.1-68.9-6.9-15.3-1.9-29.3 9-31.3 24.3s9 29.3 24.3 31.3C99.8 177.1 176.2 182 252 182s152.2-4.9 227.5-14.2c15.3-1.9 26.2-15.9 24.3-31.3s-15.9-26.2-31.3-24.3c-22.9 2.8-45.9 5-68.9 6.9l-5.7-45.5c-5.3-42-41-73.6-83.4-73.6H189.4C147 0 111.3 31.5 106 73.6zM91 230.7c-11.3-.9-21 7.9-21 19.3v114c0 72.5 14.3 124.4 49.1 157 34.6 32.3 82.7 39 132.9 39s98.3-6.8 132.9-39c34.9-32.6 49.1-84.5 49.1-157V250c0-11.3-9.7-20.2-21-19.3-43.3 3.6-101.8 7.3-161 7.3s-117.7-3.7-161-7.3"})
);

export default NeoTrashSolid;
