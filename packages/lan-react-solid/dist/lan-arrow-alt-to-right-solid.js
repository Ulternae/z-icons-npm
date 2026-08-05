import React from 'react';

export function LanArrowAltToRightSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M480 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32M377 239c9.4 9.4 9.4 24.6 0 33.9L233 417c-6.9 6.9-17.2 8.9-26.2 5.2S192 409.7 192 400v-80H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h144v-80c0-9.7 5.8-18.5 14.8-22.2s19.3-1.6 26.2 5.2z"})
  );
}

export default LanArrowAltToRightSolid;
