import React from 'react';

export function LanSingleQuoteLeftRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 192 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M136 96c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-39.8 0-72 32.2-72 72v10.1c3.1-.8 6.2-1.4 9.5-1.7l6.5-.3h64l6.5.3c32.3 3.3 57.5 30.5 57.5 63.7v64l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-64l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 352V216C0 149.7 53.7 96 120 96zM64 272c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16z"})
  );
}

export default LanSingleQuoteLeftRegular;
