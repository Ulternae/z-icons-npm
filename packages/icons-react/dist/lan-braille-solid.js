import React from 'react';

export const LanBrailleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 384 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 144a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0 136c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24m0 56c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80m248-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24m56 0c0-44.2-35.8-80-80-80s-80 35.8-80 80 35.8 80 80 80 80-35.8 80-80m-80-216a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-192a80 80 0 1 0 0-160 80 80 0 1 0 0 160"})
);

export default LanBrailleSolid;
