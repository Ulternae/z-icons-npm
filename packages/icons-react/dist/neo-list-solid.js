import React from 'react';

export const NeoListSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 84a56 56 0 1 1 112 0A56 56 0 1 1 0 84m56 252a56 56 0 1 0 0-112 56 56 0 1 0 0 112m0 196c34.2 0 56-21.8 56-56s-21.8-56-56-56-56 21.8-56 56 21.8 56 56 56M224 56c-15.5 0-28 12.5-28 28s12.5 28 28 28h196c15.5 0 28-12.5 28-28s-12.5-28-28-28zm0 196c-15.5 0-28 12.5-28 28s12.5 28 28 28h196c15.5 0 28-12.5 28-28s-12.5-28-28-28zm0 196c-15.5 0-28 12.5-28 28s12.5 28 28 28h196c15.5 0 28-12.5 28-28s-12.5-28-28-28z"})
);

export default NeoListSolid;
