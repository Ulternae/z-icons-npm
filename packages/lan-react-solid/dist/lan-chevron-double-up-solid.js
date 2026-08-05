import React from 'react';

export function LanChevronDoubleUpSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-192 192c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3l169.4 169.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-192-192zm192 384-192-192c-12.5-12.5-32.8-12.5-45.3 0l-192 192c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3l169.4 169.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"})
  );
}

export default LanChevronDoubleUpSolid;
