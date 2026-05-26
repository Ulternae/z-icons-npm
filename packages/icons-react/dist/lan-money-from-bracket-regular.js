import React from 'react';

export const LanMoneyFromBracketRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M88 48c-22.1 0-40 17.9-40 40v80c0 13.3-10.7 24-24 24S0 181.3 0 168V88C0 39.4 39.4 0 88 0h400c48.6 0 88 39.4 88 88v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-22.1-17.9-40-40-40zm280 416c0-35.3 28.7-64 64-64V96h48v352c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96h48v304c35.3 0 64 28.7 64 64zm16-208a96 96 0 1 1-192 0 96 96 0 1 1 192 0"})
);

export default LanMoneyFromBracketRegular;
