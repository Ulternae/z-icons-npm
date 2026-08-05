import React from 'react';

export function LanTableColumnsRemoveBeforeSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128.4 32c-35.3 0-64 28.7-64 64v32h64V96h128v320h-128v-32h-64v32c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm320 384h-128V96h128zM62.5 188.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l33.9 33.9-34 34c-9.4 9.4-9.4 24.6 0 33.9 9.4 9.4 24.6 9.4 34 0l33.9-33.9 33.9 33.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L130.3 256l33.9-33.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L96.4 222z"})
  );
}

export default LanTableColumnsRemoveBeforeSolid;
