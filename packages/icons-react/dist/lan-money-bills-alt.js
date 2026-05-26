import React from 'react';

export const LanMoneyBillsAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 64c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM160 32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm176 240a64 64 0 1 1 0-128 64 64 0 1 1 0 128m-96-64a96 96 0 1 0 192 0 96 96 0 1 0-192 0M32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v304c0 35.3 28.7 64 64 64h400c8.8 0 16-7.2 16-16s-7.2-16-16-16H64c-17.7 0-32-14.3-32-32z"})
);

export default LanMoneyBillsAlt;
