import React from 'react';

export const LanMoneyBillsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 80c0 35.3-28.7 64-64 64v128c35.3 0 64 28.7 64 64h256c0-35.3 28.7-64 64-64V144c-35.3 0-64-28.7-64-64zM96 96c0-35.3 28.7-64 64-64h352c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm240 32a80 80 0 1 1 0 160 80 80 0 1 1 0-160m-312 0c13.3 0 24 10.7 24 24v264c0 8.8 7.2 16 16 16h392c13.3 0 24 10.7 24 24s-10.7 24-24 24H64c-35.3 0-64-28.7-64-64V152c0-13.3 10.7-24 24-24"})
);

export default LanMoneyBillsRegular;
