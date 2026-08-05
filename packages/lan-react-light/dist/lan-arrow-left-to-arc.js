import React from 'react';

export function LanArrowLeftToArc({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 256c0 123.7 100.3 224 224 224 8.8 0 16 7.2 16 16s-7.2 16-16 16C114.6 512 0 397.4 0 256S114.6 0 256 0c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.3 32 32 132.3 32 256m244.7 123.3-112-112c-6.2-6.2-6.2-16.4 0-22.6l112-112c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L214.6 240H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H214.6l84.7 84.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0"})
  );
}

export default LanArrowLeftToArc;
