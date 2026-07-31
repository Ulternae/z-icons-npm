import React from 'react';

export const LanIceCreamSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M335.1 160c.6-5.3.9-10.6.9-16C336 64.5 271.5 0 192 0S48 64.5 48 144c0 5.4.3 10.7.9 16H48c-26.5 0-48 21.5-48 48s21.5 48 48 48h288c26.5 0 48-21.5 48-48s-21.5-48-48-48zM64 304l105.2 225.5c4.1 8.8 13 14.5 22.8 14.5s18.6-5.7 22.8-14.5L320 304z"})
);

export default LanIceCreamSolid;
