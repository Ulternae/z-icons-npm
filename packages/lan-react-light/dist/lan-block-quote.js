import React from 'react';

export function LanBlockQuote({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 64C7.2 64 0 71.2 0 80s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16zm128 176c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-16 192c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H144c-8.8 0-16 7.2-16 16M0 432c0 8.8 7.2 16 16 16s16-7.2 16-16V240c0-8.8-7.2-16-16-16s-16 7.2-16 16z"})
  );
}

export default LanBlockQuote;
