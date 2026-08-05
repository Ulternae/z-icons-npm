import React from 'react';

export function LanFoldersThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 368H160c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48h117.5c12.7 0 24.9 5.1 33.9 14.1L347.3 66c9 9 21.2 14.1 33.9 14.1L512 80c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48m-352 16h352c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H381.3c-8.5 0-16.6-3.4-22.6-9.4l-36-35.9C310.7 6.7 294.5 0 277.5 0H160c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64M16 104c0-4.4-3.6-8-8-8s-8 3.6-8 8v320c0 30.9 25.1 56 56 56h416c4.4 0 8-3.6 8-8s-3.6-8-8-8H56c-22.1 0-40-17.9-40-40z"})
  );
}

export default LanFoldersThin;
