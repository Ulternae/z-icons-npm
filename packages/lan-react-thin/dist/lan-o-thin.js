import React from 'react';

export function LanOThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416m224 208a224 224 0 1 1-448 0 224 224 0 1 1 448 0"})
  );
}

export default LanOThin;
