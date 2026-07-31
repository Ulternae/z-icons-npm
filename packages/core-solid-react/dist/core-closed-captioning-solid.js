import React from 'react';

export function CoreClosedCaptioningSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm120 96v128c0 17.7 14.3 32 32 32h80c17.7 0 32-14.3 32-32v-40h-48v24h-48v-96h48v24h48v-40c0-17.7-14.3-32-32-32h-80c-17.7 0-32 14.3-32 32m224-32c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h80c17.7 0 32-14.3 32-32v-40h-48v24h-48v-96h48v24h48v-40c0-17.7-14.3-32-32-32z"})
  );
}

export default CoreClosedCaptioningSolid;
