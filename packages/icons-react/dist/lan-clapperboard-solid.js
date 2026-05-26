import React from 'react';

export const LanClapperboardSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 64c2 0 3.9.1 5.8.3L358.1 160H426l72-72c8.8 11 14 24.9 14 40v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h70.1l-96 96H106l95-95 1-1h92.1l-96 96H266l95-95 1-1h86.1z"})
);

export default LanClapperboardSolid;
