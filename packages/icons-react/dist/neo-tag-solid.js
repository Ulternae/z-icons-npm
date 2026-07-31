import React from 'react';

export const NeoTagSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M41 332.6c-26.3-26.3-41-61.9-41-99V154c0-26.8 1.3-50.2 5.6-69.9 4.3-20 12.1-38.1 26.3-52.3S64.1 9.9 84.1 5.6C103.8 1.3 127.2 0 154 0h79.6c37.1 0 72.7 14.7 99 41l197.1 197.1c19.4 19.4 30.3 45.7 30.3 73.2 0 22-7 43.9-21.2 61.7-16.3 20.5-44.4 54.1-78 87.8s-67.3 61.7-87.8 78C355.1 553 333.2 560 311.3 560c-27.4 0-53.8-10.9-73.2-30.3zM154 196a42 42 0 1 0 0-84 42 42 0 1 0 0 84"})
);

export default NeoTagSolid;
