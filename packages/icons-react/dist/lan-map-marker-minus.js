import React from 'react';

export const LanMapMarkerMinus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 515',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 188.6C32 102.6 103.1 32 192 32s160 70.6 160 156.6c0 50.3-25.9 109.4-61.4 165.6-34 53.8-74 100.5-98.6 127.4-24.6-26.9-64.6-73.7-98.6-127.4C57.9 298 32 238.9 32 188.6M192 0C86 0 0 84.4 0 188.6c0 119.3 120.2 262.3 170.4 316.8 11.8 12.8 31.4 12.8 43.2 0C263.8 450.9 384 307.9 384 188.6 384 84.4 298 0 192 0m-80 176c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanMapMarkerMinus;
