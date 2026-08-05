import React from 'react';

export function CoreFireSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 512c123.7 0 224-100.3 224-224 0-71.7-28.5-140.5-79.2-191.2L336 64l-61.7 61.7L160 0 74.9 93.6C26.7 146.6 0 216.4 0 288c0 123.7 100.3 224 224 224m0-256 59 62.5c13.5 14.3 21 33.1 21 52.7 0 42.4-34.4 76.8-76.8 76.8h-6.5c-42.4 0-76.8-34.4-76.8-76.8 0-19.6 7.5-38.5 21-52.7z"})
  );
}

export default CoreFireSolid;
