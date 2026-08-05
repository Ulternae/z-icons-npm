import React from 'react';

export function LanFontThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32c3.3 0 6.2 2 7.4 5l174 427H488c4.4 0 8 3.6 8 8s-3.6 8-8 8H360c-4.4 0-8-3.6-8-8s3.6-8 8-8h60.1L368 336H144.1L92 464h60.1c4.4 0 8 3.6 8 8s-3.6 8-8 8H24c-4.4 0-8-3.6-8-8s3.6-8 8-8h50.6l174-427c1.2-3 4.2-5 7.4-5M150.6 320h210.8L256 61.2z"})
  );
}

export default LanFontThin;
