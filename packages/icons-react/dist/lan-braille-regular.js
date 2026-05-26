import React from 'react';

export const LanBrailleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 144a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0 144c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32m0 48c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80m256-80c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32m48 0c0-44.2-35.8-80-80-80s-80 35.8-80 80 35.8 80 80 80 80-35.8 80-80m-80-224a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 112a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-192a80 80 0 1 0 0-160 80 80 0 1 0 0 160"})
);

export default LanBrailleRegular;
