import React from 'react';

export function LanPesetaSign({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M112 32c-8.8 0-16 7.2-16 16v128H64c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v256c0 8.8 7.2 16 16 16s16-7.2 16-16V352h96c83 0 151.2-63.1 159.2-144H416c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32.8C375.2 95.1 307 32 224 32zm239 144H128V64h96c65.3 0 119.1 48.9 127 112m-223 32h223c-7.9 63.1-61.7 112-127 112h-96z"})
  );
}

export default LanPesetaSign;
