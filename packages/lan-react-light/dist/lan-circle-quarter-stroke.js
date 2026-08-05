import React from 'react';

export function LanCircleQuarterStroke({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M480 256c0-123.7-100.3-224-224-224v176c0 26.5-21.5 48-48 48H32c0 123.7 100.3 224 224 224s224-100.3 224-224M224 34.3C125.9 48.3 48.3 125.9 34.3 224H208c8.8 0 16-7.2 16-16zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"})
  );
}

export default LanCircleQuarterStroke;
