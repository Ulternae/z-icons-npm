import React from 'react';

export const LanMapMarkerSmile = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 515',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 188.6C32 102.6 103.1 32 192 32s160 70.6 160 156.6c0 50.3-25.9 109.4-61.4 165.6-34 53.8-74 100.5-98.6 127.4-24.6-26.9-64.6-73.7-98.6-127.4C57.9 298 32 238.9 32 188.6M192 0C86 0 0 84.4 0 188.6c0 119.3 120.2 262.3 170.4 316.8 11.8 12.8 31.4 12.8 43.2 0C263.8 450.9 384 307.9 384 188.6 384 84.4 298 0 192 0m-64 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48m152-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-154.7 87.1c-4.9-7.4-14.8-9.3-22.2-4.4s-9.3 14.8-4.4 22.2c11 16.5 43.9 47.1 93.3 47.1s82.3-30.6 93.3-47.1c4.9-7.4 2.9-17.3-4.4-22.2s-17.3-2.9-22.2 4.4C251.9 257.3 228 280 192 280s-59.9-22.7-66.7-32.9"})
);

export default LanMapMarkerSmile;
