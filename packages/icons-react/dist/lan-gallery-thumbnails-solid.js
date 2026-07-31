import React from 'react';

export const LanGalleryThumbnailsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm0 256c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm192-32h32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32m128 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32zm192-32h32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32"})
);

export default LanGalleryThumbnailsSolid;
