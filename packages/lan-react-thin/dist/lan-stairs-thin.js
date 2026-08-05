import React from 'react';

export function LanStairsThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M424 40c0-4.4 3.6-8 8-8h136c4.4 0 8 3.6 8 8s-3.6 8-8 8H440v136c0 4.4-3.6 8-8 8H296v136c0 4.4-3.6 8-8 8H152v136c0 4.4-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h128V328c0-4.4 3.6-8 8-8h136V184c0-4.4 3.6-8 8-8h136z"})
  );
}

export default LanStairsThin;
