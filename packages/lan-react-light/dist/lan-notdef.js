import React from 'react';

export function LanNotdef({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 452.5 172.3 256 32 59.5zM51.7 480h280.6L192 283.5zm160-224L352 452.5v-393zM332.3 32H51.7L192 228.5zM0 48C0 21.5 21.5 0 48 0h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"})
  );
}

export default LanNotdef;
