import React from 'react';

export const LanPeriodSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 128 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 416c0 35.3-28.7 64-64 64S0 451.3 0 416s28.7-64 64-64 64 28.7 64 64"})
);

export default LanPeriodSolid;
