import React from 'react';

export function LanArrowRightRotateThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M504 0c-4.4 0-8 3.6-8 8v124.7l-56.8-56.8C390.6 27.3 324.7 0 256 0 114.6 0 0 114.6 0 256s114.6 256 256 256c103 0 191.8-60.8 232.4-148.5 1.9-4 .1-8.8-3.9-10.6s-8.8-.1-10.6 3.9C435.8 439 352.5 496 256 496 123.5 496 16 388.5 16 256S123.5 16 256 16c64.5 0 126.3 25.6 171.9 71.2l56.8 56.8H360c-4.4 0-8 3.6-8 8s3.6 8 8 8h152V8c0-4.4-3.6-8-8-8"})
  );
}

export default LanArrowRightRotateThin;
