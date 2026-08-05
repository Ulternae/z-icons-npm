import React from 'react';

export function LanXmarkLarge({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M4.7 27.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 233.4 484.7 4.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L278.6 256l228.7 228.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L256 278.6 27.3 507.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L233.4 256z"})
  );
}

export default LanXmarkLarge;
