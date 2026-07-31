import React from 'react';

export const LanGRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 80c-97.2 0-176 78.8-176 176s78.8 176 176 176c89.1 0 162.7-66.2 174.4-152h-149c-13.3 0-24-10.7-24-24s10.7-24 24-24H408c21.6 0 41.2 17.9 39.3 41.9C438.2 389.3 341.7 480 224 480 100.3 480 0 379.7 0 256S100.3 32 224 32c57.4 0 109.7 21.6 149.3 57 9.9 8.8 10.7 24 1.9 33.9s-24 10.7-33.9 1.9C310.2 96.9 269.1 80 224 80"})
);

export default LanGRegular;
