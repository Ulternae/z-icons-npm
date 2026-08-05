import React from 'react';

export function LanChevronDoubleLeftRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M7.5 239c-9.4 9.4-9.4 24.6 0 33.9l200 200c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-183-183 183-183c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0zm392-200-200 200c-9.4 9.4-9.4 24.6 0 33.9l200 200c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-183-183 183-183c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z"})
  );
}

export default LanChevronDoubleLeftRegular;
