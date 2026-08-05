import React from 'react';

export function LanImagePolaroidUserRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M400 384v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-32zm0-48h-70.7c-12.3-28.3-40.5-48-73.3-48h-64c-32.8 0-61 19.7-73.3 48H48V96c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16zm48 0V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zm-224-88a56 56 0 1 0 0-112 56 56 0 1 0 0 112"})
  );
}

export default LanImagePolaroidUserRegular;
