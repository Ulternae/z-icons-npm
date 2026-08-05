import React from 'react';

export function LanBracketLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 192 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 80c0-26.5 21.5-48 48-48h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-26.5 0-48-21.5-48-48z"})
  );
}

export default LanBracketLeft;
