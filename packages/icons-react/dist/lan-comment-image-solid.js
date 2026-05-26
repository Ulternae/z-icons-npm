import React from 'react';

export const LanCommentImageSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 480c141.4 0 256-107.5 256-240S397.4 0 256 0 0 107.5 0 240c0 54.3 19.2 104.3 51.6 144.5L2.8 476.8c-4.8 9-3.3 20 3.6 27.5s17.8 9.8 27.1 5.8l118.4-50.7c31.8 13.2 67 20.6 104.1 20.6M128 144a32 32 0 1 1 64 0 32 32 0 1 1-64 0m28.6 192c-15.8 0-28.6-12.8-28.6-28.6 0-7.3 2.8-14.4 7.9-19.7l96.8-101.8c6-6.4 14.4-9.9 23.2-9.9h.3c8.8 0 17.1 3.6 23.2 9.9l96.8 101.8c5.1 5.3 7.9 12.4 7.9 19.7 0 15.8-12.8 28.6-28.6 28.6H156.7z"})
);

export default LanCommentImageSolid;
