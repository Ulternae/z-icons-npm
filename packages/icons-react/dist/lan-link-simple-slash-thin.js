import React from 'react';

export const LanLinkSimpleSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M13.7-29.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l560 560c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-103-102.9C533.2 395.7 576 330.8 576 256c0-106-86-192-192-192h-56c-4.4 0-8 3.6-8 8s3.6 8 8 8h56c97.2 0 176 78.8 176 176 0 70.5-41.4 131.3-101.2 159.4L307.4 264H408c4.4 0 8-3.6 8-8s-3.6-8-8-8H291.4l-158-158c18.3-6.5 38.1-10 58.6-10h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56c-25.1 0-49.1 4.8-71 13.6zm62.5 153.2-11.3-11.3C25.1 147.3 0 198.7 0 256c0 106 86 192 192 192h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56c-97.2 0-176-78.8-176-176 0-52.9 23.3-100.3 60.2-132.6"})
);

export default LanLinkSimpleSlashThin;
