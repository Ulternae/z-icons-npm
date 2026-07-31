import React from 'react';

export const LanDiamondHalfStrokeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M232 67.9v376.2L50.9 263c-1.9-1.9-2.9-4.4-2.9-7s1-5.2 2.9-7zm48 376.2V67.9L461.1 249c1.9 1.9 2.9 4.4 2.9 7s-1 5.2-2.9 7zM215 17 17 215C6.1 225.9 0 240.6 0 256s6.1 30.1 17 41l198 198c10.9 10.9 25.6 17 41 17s30.1-6.1 41-17l198-198c10.9-10.9 17-25.6 17-41s-6.1-30.1-17-41L297 17C286.1 6.1 271.4 0 256 0s-30.1 6.1-41 17"})
);

export default LanDiamondHalfStrokeRegular;
