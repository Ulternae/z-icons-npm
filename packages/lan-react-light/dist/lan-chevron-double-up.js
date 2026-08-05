import React from 'react';

export function LanChevronDoubleUp({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M235.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-208 208c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L224 70.6l196.7 196.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zm208 400-208-208c-6.2-6.2-16.4-6.2-22.6 0l-208 208c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L224 262.6l196.7 196.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6"})
  );
}

export default LanChevronDoubleUp;
