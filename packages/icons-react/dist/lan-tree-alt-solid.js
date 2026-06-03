import React from 'react';

export const LanTreeAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 0c44.3 0 81.5 30 92.5 70.8 11-4.4 22.9-6.8 35.5-6.8 53 0 96 43 96 96 0 19.3-5.8 37.3-15.6 52.4 28.8 20.3 47.6 53.7 47.6 91.6 0 61.9-50.1 112-112 112H288v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96H112C50.1 416 0 365.9 0 304c0-37.9 18.8-71.4 47.6-91.6-9.8-15.1-15.6-33-15.6-52.4 0-53 43-96 96-96 12.5 0 24.5 2.4 35.4 6.8C174.5 30 211.7 0 256 0"})
);

export default LanTreeAltSolid;
