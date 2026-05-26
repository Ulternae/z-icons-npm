import React from 'react';

export const LanColonThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 128 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 128a48 48 0 1 0-96 0 48 48 0 1 0 96 0M0 128a64 64 0 1 1 128 0 64 64 0 1 1-128 0m112 256c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48m16 0c0 35.3-28.7 64-64 64S0 419.3 0 384s28.7-64 64-64 64 28.7 64 64"})
);

export default LanColonThin;
