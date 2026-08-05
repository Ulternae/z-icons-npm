import React from 'react';

export function LanCaretDown({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M137.9 374.6c12.9 11.6 32.4 12.8 45.2 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9l-2.2-4.3c-5.7-9.5-16.1-15.5-27.4-15.5h-256l-4.8.3c-9.4 1.4-17.7 7-22.6 15.1l-2.2 4.3C-1.4 222.2.2 234 6.7 243l3.1 3.7 128 128zm22.7-23c-.3-.1-.7-.3-1.1-.7L32.5 224h256L160.8 351.7c-.1 0-.2-.1-.2-.1"})
  );
}

export default LanCaretDown;
