import React from 'react';

export const LanLinkSimpleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 256C0 150 86 64 192 64h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56C94.8 80 16 158.8 16 256s78.8 176 176 176h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56C86 448 0 362 0 256m576 0c0 106-86 192-192 192h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h56c97.2 0 176-78.8 176-176S481.2 80 384 80h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h56c106 0 192 86 192 192m-408-8h240c4.4 0 8 3.6 8 8s-3.6 8-8 8H168c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanLinkSimpleThin;
