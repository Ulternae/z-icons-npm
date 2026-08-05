import React from 'react';

export function LanSquareBoltRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128.6 176c-9.2 0-16.6-7.4-16.6-16.6 0-4.7 2-9.2 5.5-12.4l141.2-126.3c3.4-3 7.8-4.7 12.4-4.7 12.4 0 21.3 12 17.8 23.9L257.7 240h61.8c9.2 0 16.6 7.4 16.6 16.6 0 4.7-2 9.2-5.5 12.4L189.3 395.3c-3.4 3-7.8 4.7-12.4 4.7-12.4 0-21.3-12-17.8-23.9L190.3 272h-61.8z"})
  );
}

export default LanSquareBoltRegular;
