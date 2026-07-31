import React from 'react';

export const LanPesoSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M104 32c-4.4 0-8 3.6-8 8v104H64c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v64H64c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v232c0 4.4 3.6 8 8 8s8-3.6 8-8V336h120c64.2 0 119.1-39.8 141.4-96H416c4.4 0 8-3.6 8-8s-3.6-8-8-8h-37.3c3.5-12.7 5.3-26.2 5.3-40 0-8.2-.6-16.2-1.9-24H416c4.4 0 8-3.6 8-8s-3.6-8-8-8h-37.3C361.1 79.5 302.1 32 232 32zm258 112H112V48h120c61.2 0 112.9 40.4 130 96m-250 16h253.9c2.2 12.3 4.7 36.1-3.9 64H112zm244 80c-21.3 47.2-68.8 80-124 80H112v-80z"})
);

export default LanPesoSignThin;
