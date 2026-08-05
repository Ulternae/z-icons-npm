import React from 'react';

export function Lan6Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M264 32c13.3 0 24 10.7 24 24s-10.7 24-24 24H160c-53 0-96 43-96 96v64.3c23.7-20.1 54.4-32.3 88-32.3h64c75.1 0 136 60.9 136 136s-60.9 136-136 136h-64c-75.1 0-136-60.9-136-136 0-1.9 0-3.8.1-5.6-.1-.8-.1-1.6-.1-2.4V176C16 96.5 80.5 32 160 32zM64 344c0 48.6 39.4 88 88 88h64c48.6 0 88-39.4 88-88s-39.4-88-88-88h-64c-48.6 0-88 39.4-88 88"})
  );
}

export default Lan6Regular;
