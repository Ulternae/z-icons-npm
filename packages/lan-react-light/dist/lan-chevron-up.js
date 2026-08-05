import React from 'react';

export function LanChevronUp({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M212.7 100.7c6.2-6.2 16.4-6.2 22.6 0l208 208c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 134.6 27.3 331.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z"})
  );
}

export default LanChevronUp;
