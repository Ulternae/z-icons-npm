import React from 'react';

export const LanCompressWide = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 80c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h112zm16 208c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V320H16c-8.8 0-16-7.2-16-16s7.2-16 16-16zM352 80c0-8.8 7.2-16 16-16s16 7.2 16 16v112h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm144 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H384v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16z"})
);

export default LanCompressWide;
