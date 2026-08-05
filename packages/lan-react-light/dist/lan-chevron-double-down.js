import React from 'react';

export function LanChevronDoubleDown({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m4.7 75.3 208 208c6.2 6.2 16.4 6.2 22.6 0l208-208c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 249.4 27.3 52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6m0 192 208 208c6.2 6.2 16.4 6.2 22.6 0l208-208c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 441.4 27.3 244.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6"})
  );
}

export default LanChevronDoubleDown;
