import React from 'react';

export function LanChevronDoubleDownSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-192-192c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7l169.4-169.3c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-192 192zm192-384-192 192c-12.5 12.5-32.8 12.5-45.3 0L9.4 86.6c-12.5-12.5-12.5-32.7 0-45.2s32.8-12.5 45.3 0L224 210.7 393.4 41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"})
  );
}

export default LanChevronDoubleDownSolid;
