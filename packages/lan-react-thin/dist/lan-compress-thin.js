import React from 'react';

export function LanCompressThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M152 32c4.4 0 8 3.6 8 8v144c0 4.4-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h136V40c0-4.4 3.6-8 8-8m144 0c4.4 0 8 3.6 8 8v136h136c4.4 0 8 3.6 8 8s-3.6 8-8 8H296c-4.4 0-8-3.6-8-8V40c0-4.4 3.6-8 8-8M0 328c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v144c0 4.4-3.6 8-8 8s-8-3.6-8-8V336H8c-4.4 0-8-3.6-8-8m288 0c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H304v136c0 4.4-3.6 8-8 8s-8-3.6-8-8z"})
  );
}

export default LanCompressThin;
