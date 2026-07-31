import React from 'react';

export const LanPesetaSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M104 32c-4.4 0-8 3.6-8 8v144H64c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v272c0 4.4 3.6 8 8 8s8-3.6 8-8V336h120c78.5 0 143.2-59.6 151.2-136H416c4.4 0 8-3.6 8-8s-3.6-8-8-8h-32c0-83.9-68.1-152-152-152zm264 152H112V48h120c75.1 0 136 60.9 136 136m-256 16h255.1c-7.9 67.6-65.4 120-135.1 120H112z"})
);

export default LanPesetaSignThin;
