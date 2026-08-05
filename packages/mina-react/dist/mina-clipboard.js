import React from 'react';

export function MinaClipboard({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9z"}), React.createElement("path", {"d":"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"})
  );
}

export default MinaClipboard;
