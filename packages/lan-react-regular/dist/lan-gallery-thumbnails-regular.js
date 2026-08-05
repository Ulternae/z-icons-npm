import React from 'react';

export function LanGalleryThumbnailsRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 112c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16zM64 64C28.7 64 0 92.7 0 128v96c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-96c0-35.3-28.7-64-64-64zM0 384v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32m192-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm128 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32m192-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32z"})
  );
}

export default LanGalleryThumbnailsRegular;
