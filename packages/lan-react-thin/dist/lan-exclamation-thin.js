import React from 'react';

export function LanExclamationThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 64 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 480c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16M32 0c8.9 0 16 7.3 15.8 16.2l-7.8 360c-.1 4.3-3.7 7.8-8 7.8s-7.9-3.5-8-7.8l-7.8-360C16 7.3 23.1 0 32 0"})
  );
}

export default LanExclamationThin;
