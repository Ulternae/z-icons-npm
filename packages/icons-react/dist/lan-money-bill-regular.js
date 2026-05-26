import React from 'react';

export const LanMoneyBillRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M400 112c0 35.3 28.7 64 64 64v160c-35.3 0-64 28.7-64 64H112c0-35.3-28.7-64-64-64V176c35.3 0 64-28.7 64-64zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm288 192a96 96 0 1 0-192 0 96 96 0 1 0 192 0"})
);

export default LanMoneyBillRegular;
