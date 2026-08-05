import React from 'react';

export function LanSquareQRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm152 160c0 39.8 32.2 72 72 72 11.1 0 21.6-2.5 31-7l-25.9-25.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l26 25.8c4.5-9.4 7-19.9 7-31 0-39.8-32.2-72-72-72s-72 32.2-72 72m192 0c0 24.5-7.3 47.2-19.9 66.2L337 335c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L290.2 356c-19 12.6-41.7 19.9-66.2 19.9-66.3 0-120-53.7-120-120s53.7-120 120-120 120 53.7 120 120z"})
  );
}

export default LanSquareQRegular;
