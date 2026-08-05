import React from 'react';

export function LanYinYangThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 256c0 132.5-107.5 240-240 240-66.5 0-120-52.2-120-116s53.5-116 120-116c74.9 0 136-58.9 136-132 0-39.1-17.4-74.1-45.1-98.2C434.4 69.6 496 155.6 496 256M256 16c66.5 0 120 52.2 120 116s-53.5 116-120 116c-74.9 0-136 58.9-136 132 0 39.1 17.4 74.1 45.1 98.2C77.6 442.4 16 356.4 16 256 16 123.5 123.5 16 256 16m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-104a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-40-24a40 40 0 1 0 80 0 40 40 0 1 0-80 0m64-256a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80"})
  );
}

export default LanYinYangThin;
