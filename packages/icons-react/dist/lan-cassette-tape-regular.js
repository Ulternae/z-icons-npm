import React from 'react';

export const LanCassetteTapeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 112c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16h-28.8l-7.1-17.8c-7.3-18.2-24.9-30.2-44.6-30.2h-223c-19.6 0-37.3 11.9-44.6 30.2L92.8 400H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm72 160a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 64h192c35.3 0 64-28.7 64-64s-28.7-64-64-64H160c-35.3 0-64 28.7-64 64s28.7 64 64 64m132.7-40h-73.3c3-7.4 4.7-15.5 4.7-24s-1.7-16.6-4.7-24h73.3c-3 7.4-4.7 15.5-4.7 24s1.7 16.6 4.7 24m59.3-48a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanCassetteTapeRegular;
