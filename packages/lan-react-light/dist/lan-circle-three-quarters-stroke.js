import React from 'react';

export function LanCircleThreeQuartersStroke({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M477.7 288H272c-26.5 0-48-21.5-48-48V34.3C115.4 49.8 32 143.2 32 256c0 123.7 100.3 224 224 224 112.8 0 206.2-83.4 221.7-192m2.3-32c0-123.7-100.3-224-224-224v208c0 8.8 7.2 16 16 16zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"})
  );
}

export default LanCircleThreeQuartersStroke;
