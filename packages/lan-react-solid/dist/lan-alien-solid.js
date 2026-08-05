import React from 'react';

export function LanAlienSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 0C100.3 0 0 100.3 0 224c0 135.3 148.8 247.7 194.7 279.2 8.6 5.9 18.8 8.8 29.3 8.8s20.7-2.9 29.3-8.8C299.2 471.7 448 359.3 448 224 448 100.3 347.7 0 224 0m32 306.3c0-45.4 36.8-82.3 82.3-82.3h32c7.6 0 13.7 6.1 13.7 13.7 0 45.4-36.8 82.3-82.3 82.3h-32c-7.6 0-13.7-6.1-13.7-13.7M109.7 224c45.4 0 82.3 36.8 82.3 82.3 0 7.6-6.1 13.7-13.7 13.7h-32c-45.4 0-82.3-36.8-82.3-82.3 0-7.6 6.1-13.7 13.7-13.7z"})
  );
}

export default LanAlienSolid;
