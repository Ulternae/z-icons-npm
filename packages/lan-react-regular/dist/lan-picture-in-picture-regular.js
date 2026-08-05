import React from 'react';

export function LanPictureInPictureRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 32c35.3 0 64 28.7 64 64v112h-48V96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h144v48H64l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416V96c0-33.1 25.2-60.4 57.5-63.7L64 32zm16 224c26.5 0 48 21.5 48 48v128l-.2 4.9c-2.5 24.2-22.9 43.1-47.8 43.1H304l-4.9-.2c-22.6-2.3-40.6-20.3-42.8-42.8l-.2-4.9v-128c0-26.5 21.5-48 48-48h160zM304 432h160V304H304z"})
  );
}

export default LanPictureInPictureRegular;
