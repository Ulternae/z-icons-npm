import React from 'react';

export function LanAlignJustify({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 48C7.2 48 0 55.2 0 64s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16zM0 192c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16m16 112c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 128c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
  );
}

export default LanAlignJustify;
