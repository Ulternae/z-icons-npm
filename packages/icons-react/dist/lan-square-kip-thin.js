import React from 'react';

export const LanSquareKipThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm176 40v104.1l130.8-110.2c3.4-2.8 8.4-2.4 11.3 1s2.4 8.4-1 11.3l-126 106.1h120.6c4.4 0 8 3.6 8 8s-3.6 8-8 8H191.2L317.1 370c3.4 2.8 3.8 7.9 1 11.3s-7.9 3.8-11.3 1L176 272.3V376c0 4.4-3.6 8-8 8s-8-3.6-8-8V264.2h-31.8c-4.4 0-8-3.6-8-8s3.6-8 8-8H160V136c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanSquareKipThin;
