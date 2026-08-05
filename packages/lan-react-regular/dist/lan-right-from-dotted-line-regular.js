import React from 'react';

export function LanRightFromDottedLineRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M505 239c9.4 9.4 9.4 24.6 0 33.9L361 417c-6.9 6.9-17.2 8.9-26.2 5.2S320 409.7 320 400v-64H176c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h144v-64c0-9.7 5.8-18.5 14.8-22.2s19.3-1.6 26.2 5.2zm-249-15h-80v64h168c13.3 0 24 10.7 24 24v30.1l86.1-86.1-86.1-86.1V200c0 13.3-10.7 24-24 24zM0 416a32 32 0 1 1 64 0 32 32 0 1 1-64 0m0-106.7a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32-138.6a32 32 0 1 1 0 64 32 32 0 1 1 0-64M0 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
  );
}

export default LanRightFromDottedLineRegular;
