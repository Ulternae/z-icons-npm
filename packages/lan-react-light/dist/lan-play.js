import React from 'react';

export function LanPlay({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M51.6 37.6C39.5 44.8 32 57.9 32 72v368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6.7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184c-12.4-6.8-27.4-6.5-39.6.7M75.8 65l336 184c2.6 1.4 4.2 4.1 4.2 7s-1.6 5.6-4.2 7l-336 184c-2.5 1.4-5.5 1.3-7.9-.1S64 442.8 64 440V72c0-2.8 1.5-5.4 3.9-6.9s5.4-1.5 7.9-.1"})
  );
}

export default LanPlay;
