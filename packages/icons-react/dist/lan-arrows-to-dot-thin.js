import React from 'react';

export const LanArrowsToDotThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c-4.4 0-8 3.6-8 8v156.7l-74.3-74.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l88 88c3.1 3.1 8.2 3.1 11.3 0l88-88c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L264 164.7V8c0-4.4-3.6-8-8-8m165.7 162.3c-3.1-3.1-8.2-3.1-11.3 0l-88 88c-3.1 3.1-3.1 8.2 0 11.3l88 88c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L347.3 264H504c4.4 0 8-3.6 8-8s-3.6-8-8-8H347.3l74.3-74.3c3.1-3.1 3.1-8.2 0-11.3zM256 240a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64M101.7 162.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l74.3 74.4H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h156.7l-74.3 74.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l88-88c3.1-3.1 3.1-8.2 0-11.3zm60.7 248c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l74.3-74.3V504c0 4.4 3.6 8 8 8s8-3.6 8-8V347.3l74.3 74.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-88-88c-3.1-3.1-8.2-3.1-11.3 0l-88 88z"})
);

export default LanArrowsToDotThin;
