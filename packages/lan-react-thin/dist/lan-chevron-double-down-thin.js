import React from 'react';

export function LanChevronDoubleDownThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m2.3 69.7 216 216c3.1 3.1 8.2 3.1 11.3 0l216-216c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L224 268.7 13.7 58.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3zm0 192 216 216c3.1 3.1 8.2 3.1 11.3 0l216-216c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L224 460.7 13.7 250.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3z"})
  );
}

export default LanChevronDoubleDownThin;
