import React from 'react';

export function LanSignPostsThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M80 24v40H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h16v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h320v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h16c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-16V24c0-4.4-3.6-8-8-8s-8 3.6-8 8v40H96V24c0-4.4-3.6-8-8-8s-8 3.6-8 8m368 56c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48z"})
  );
}

export default LanSignPostsThin;
