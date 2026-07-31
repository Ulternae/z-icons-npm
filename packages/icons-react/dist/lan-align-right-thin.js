import React from 'react';

export const LanAlignRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M440 56c4.4 0 8 3.6 8 8s-3.6 8-8 8H168c-4.4 0-8-3.6-8-8s3.6-8 8-8zm0 128c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8zm8 136c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8s3.6-8 8-8h272c4.4 0 8 3.6 8 8m-8 120c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
);

export default LanAlignRightThin;
