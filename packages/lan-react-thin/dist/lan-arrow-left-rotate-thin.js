import React from 'react';

export function LanArrowLeftRotateThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512c-103 0-191.8-60.8-232.4-148.5-1.9-4-.1-8.8 3.9-10.6s8.8-.1 10.6 3.9C76.2 439 159.5 496 256 496c132.5 0 240-107.5 240-240S388.5 16 256 16c-64.5 0-126.3 25.6-171.9 71.2L27.3 144H152c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8V8c0-4.4 3.6-8 8-8s8 3.6 8 8v124.7l56.8-56.8C121.4 27.3 187.3 0 256 0"})
  );
}

export default LanArrowLeftRotateThin;
