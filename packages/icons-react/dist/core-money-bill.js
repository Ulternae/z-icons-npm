import React from 'react';

export const CoreMoneyBill = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 96v320h448V96zM0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm328 160a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-136 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"})
);

export default CoreMoneyBill;
