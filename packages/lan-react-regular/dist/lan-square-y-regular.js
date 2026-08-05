import React from 'react';

export function LanSquareYRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm154.3 56.5 69.7 82.3 69.7-82.3c8.6-10.1 23.7-11.4 33.8-2.8s11.4 23.7 2.8 33.8L248 280.8V344c0 13.3-10.7 24-24 24s-24-10.7-24-24v-63.2l-82.3-97.3c-8.6-10.1-7.3-25.3 2.8-33.8s25.3-7.3 33.8 2.8"})
  );
}

export default LanSquareYRegular;
