import React from 'react';

export function LanSparklesThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 8c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8s-8-3.6-8-8V88h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h56V16c0-4.4 3.6-8 8-8m-32 352c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8M131 202.9 16 256l115 53.1c3.5 1.6 6.2 4.4 7.8 7.8L192 432l53.1-115c1.6-3.5 4.4-6.2 7.8-7.8L368 256l-115-53.1c-3.5-1.6-6.2-4.4-7.8-7.8L192 80l-53.1 115c-1.6 3.5-4.4 6.2-7.8 7.8zm-6.7 120.8-115-53.2C3.6 267.9 0 262.2 0 256s3.6-11.9 9.3-14.5l115-53.1 53.1-115c2.6-5.7 8.3-9.3 14.5-9.3s11.9 3.6 14.5 9.3l53.1 115 115 53.1c5.7 2.6 9.3 8.3 9.3 14.5s-3.6 11.9-9.3 14.5l-115 53.1-53.1 115c-2.6 5.7-8.3 9.3-14.5 9.3s-11.9-3.6-14.5-9.3l-53.1-115z"})
  );
}

export default LanSparklesThin;
