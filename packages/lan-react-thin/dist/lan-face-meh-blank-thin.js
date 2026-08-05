import React from 'react';

export function LanFaceMehBlankThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480m256 240a256 256 0 1 1-512 0 256 256 0 1 1 512 0m-352-48a16 16 0 1 1 32 0 16 16 0 1 1-32 0m176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
  );
}

export default LanFaceMehBlankThin;
