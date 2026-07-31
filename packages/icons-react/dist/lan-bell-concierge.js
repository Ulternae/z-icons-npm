import React from 'react';

export const LanBellConcierge = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v48.6C123.8 152.8 32 249.7 32 368h32c0-106 86-192 192-192s192 86 192 192h32c0-118.3-91.8-215.2-208-223.4V96h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zM16 416c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanBellConcierge;
