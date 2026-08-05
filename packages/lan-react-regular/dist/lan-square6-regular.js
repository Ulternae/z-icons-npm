import React from 'react';

export function LanSquare6Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm280 72c0 13.3-10.7 24-24 24h-48c-13.3 0-24 10.7-24 24v12.1c7.5-2.7 15.6-4.1 24-4.1h32c39.8 0 72 32.2 72 72s-32.2 72-72 72h-32c-39.8 0-72-32.2-72-72v-80c0-39.8 32.2-72 72-72h48c13.3 0 24 10.7 24 24m-72 152h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24"})
  );
}

export default LanSquare6Regular;
