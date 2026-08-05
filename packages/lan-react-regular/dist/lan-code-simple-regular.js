import React from 'react';

export function LanCodeSimpleRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M209 105c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 239c-9.4 9.4-9.4 24.6 0 33.9L175 441c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L57.9 256zm158 0 151 151-151 151c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L569 273c9.4-9.4 9.4-24.6 0-33.9L401 71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"})
  );
}

export default LanCodeSimpleRegular;
