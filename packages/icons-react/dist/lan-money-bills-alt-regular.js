import React from 'react';

export const LanMoneyBillsAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 80c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM160 32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm256 176a80 80 0 1 0-160 0 80 80 0 1 0 160 0M48 152c0-13.3-10.7-24-24-24S0 138.7 0 152v264c0 35.3 28.7 64 64 64h392c13.3 0 24-10.7 24-24s-10.7-24-24-24H64c-8.8 0-16-7.2-16-16z"})
);

export default LanMoneyBillsAltRegular;
