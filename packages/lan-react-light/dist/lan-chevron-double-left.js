import React from 'react';

export function LanChevronDoubleLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M4.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l208 208c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L38.6 256 235.3 59.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0zm400-208-208 208c-6.2 6.2-6.2 16.4 0 22.6l208 208c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L230.6 256 427.3 59.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0"})
  );
}

export default LanChevronDoubleLeft;
