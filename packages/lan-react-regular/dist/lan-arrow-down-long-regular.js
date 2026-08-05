import React from 'react';

export function LanArrowDownLongRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 320.45 576.05',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M143.5 537c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95V-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v470.1l-95-95c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l136 136z"})
  );
}

export default LanArrowDownLongRegular;
