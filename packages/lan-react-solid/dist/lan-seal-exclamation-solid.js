import React from 'react';

export function LanSealExclamationSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M222.2 17.9c18.8-18.7 49.1-18.7 67.9 0L336.2 64h64c26.5 0 48 21.5 48 48v64l45.6 45.6c18.7 18.7 18.7 49.1 0 67.9l-45.6 45.6V400c0 26.5-21.5 48-48 48h-64.9l-45.1 45.1c-18.7 18.7-49.1 18.7-67.9 0L177.2 448h-64.9c-26.5 0-48-21.5-48-48v-64.9l-45.6-45.6C0 270.8 0 240.4 18.7 221.6L64.3 176v-64c0-26.5 21.5-48 48-48h64l46.1-46.1zM256.1 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"})
  );
}

export default LanSealExclamationSolid;
