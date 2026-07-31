import React from 'react';

export function CorePaperPlane({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M137.6 284H353L69 434.9zM353 228H137.6L69 77.1zm144.9 4.5L64 2 0-32V80l80 176L0 432v112l64-34 433.9-230.5c8.7-4.6 14.1-13.7 14.1-23.5s-5.4-18.9-14.1-23.5"})
  );
}

export default CorePaperPlane;
