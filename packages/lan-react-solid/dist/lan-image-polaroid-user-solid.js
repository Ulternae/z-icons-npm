import React from 'react';

export function LanImagePolaroidUserSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 64h256c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-17.6c-7.4-36.5-39.7-64-78.4-64h-64c-38.7 0-71 27.5-78.4 64H96c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32m128 152a56 56 0 1 0 0-112 56 56 0 1 0 0 112"})
  );
}

export default LanImagePolaroidUserSolid;
