import React from 'react';

export function LanChevronDoubleUpRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M241.5 39c-9.4-9.4-24.6-9.4-33.9 0L7.5 239c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l183-183 183 183c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm200 392-200-200c-9.4-9.4-24.6-9.4-33.9 0L7.5 431c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l183-183 183 183c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"})
  );
}

export default LanChevronDoubleUpRegular;
