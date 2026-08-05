import React from 'react';

export function LanBinThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M8 64c-4.4 0-8 3.6-8 8s3.6 8 8 8h24l26.9 309.5c2.9 33.1 30.6 58.5 63.8 58.5h330.6c33.2 0 60.9-25.4 63.8-58.5L544 80h24c4.4 0 8-3.6 8-8s-3.6-8-8-8zm519.9 16-26.8 308.2C499 413 478.2 432 453.3 432H122.7c-24.9 0-45.7-19-47.8-43.8L48.1 80z"})
  );
}

export default LanBinThin;
