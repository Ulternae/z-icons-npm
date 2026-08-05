import React from 'react';

export function LanChevronUpThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M218.3 98.3c3.1-3.1 8.2-3.1 11.3 0l216 216c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L224 115.3 13.7 325.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l216-216z"})
  );
}

export default LanChevronUpThin;
