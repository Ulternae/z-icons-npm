import React from 'react';

export function LanSquare4Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm168 48c13.3 0 24 10.7 24 24v88h48v-88c0-13.3 10.7-24 24-24s24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-56c-22.1 0-40-17.9-40-40v-96c0-13.3 10.7-24 24-24"})
  );
}

export default LanSquare4Regular;
