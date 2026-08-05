import React from 'react';

export function LanSliderCircleThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M464 256a112 112 0 1 0-224 0 112 112 0 1 0 224 0m15.8 8c-4.1 67-59.7 120-127.8 120-70.7 0-128-57.3-128-128s57.3-128 128-128c68 0 123.6 53 127.8 120H568c4.4 0 8 3.6 8 8s-3.6 8-8 8zm-303.6-16c-.2 5.3-.2 10.7 0 16H8c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
  );
}

export default LanSliderCircleThin;
