import React from 'react';

export function LanArrowLeftLongRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M7 239c-9.4 9.4-9.4 24.6 0 33.9L143 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-95-95H552c13.3 0 24-10.7 24-24s-10.7-24-24-24H81.9l95-95c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z"})
  );
}

export default LanArrowLeftLongRegular;
