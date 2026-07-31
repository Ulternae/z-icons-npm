import React from 'react';

export const LanHeartHalf = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M133.1 64C77.3 64 32 109.3 32 165.1c0 55.1 34.4 107.2 71.8 152.5 38.9 47.3 85.6 89.2 120.2 116.4V118.2l-8.9-12.3c-19-26.3-49.5-41.9-82-41.9M0 165.1C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l12 16.5c2 2.7 3 6 3 9.4v348.8c0 5-2.3 9.7-6.3 12.8s-9.2 4-14 2.6c-8.2-2.3-15.9-6.1-22.8-11.3C176.4 438 123.2 391.5 79.1 338 41.6 292.5 0 232.5 0 165.2z"})
);

export default LanHeartHalf;
