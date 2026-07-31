import React from 'react';

export const CoreCommentSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32c141.4 0 256 100.3 256 224S397.4 480 256 480c-22.8 0-44.9-2.7-65.9-7.6L32 512l14.2-127.7C17.1 347.9 0 303.7 0 256 0 132.3 114.6 32 256 32"})
);

export default CoreCommentSolid;
