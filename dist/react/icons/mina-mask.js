import React from 'react';

export const MinaMask = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"m5.7 8.77 5.175-1.517a4 4 0 0 1 2.25 0L18.3 8.769m-12.6 0V7.35a1.35 1.35 0 0 0-2.7 0v2.188a2 2 0 0 0 2 2h.7m0-2.769v2.77m12.6-2.77v2.77m0-2.77V7.35a1.35 1.35 0 1 1 2.7 0v2.188a2 2 0 0 1-2 2h-.7m0 0v.162a6.3 6.3 0 1 1-12.6 0v-.161"})
);

export default MinaMask;
