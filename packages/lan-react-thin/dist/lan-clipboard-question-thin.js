import React from 'react';

export function LanClipboardQuestionThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 80h128c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32m0 16c-26.5 0-48-21.5-48-48H64c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48h-16c0 26.5-21.5 48-48 48zM256 0c20.9 0 38.7 13.4 45.3 32H320c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h18.7C89.3 13.4 107.1 0 128 0zm-64 208c-25 0-45.2 20.2-45.2 45.2 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-33.8 27.4-61.2 61.2-61.2s61.2 27.4 61.2 61.2c0 31.3-21 47.1-37.4 54.4-9.5 4.2-15.9 12.3-15.9 20.4 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-16.6 12.3-29.2 25.3-35 13.6-6.1 27.9-17.5 27.9-39.8 0-25-20.2-45.2-45.2-45.2zm-16 176a16 16 0 1 1 32 0 16 16 0 1 1-32 0"})
  );
}

export default LanClipboardQuestionThin;
