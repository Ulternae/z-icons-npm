import React from 'react';

export function LanUnderlineThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 8c0-4.4 3.6-8 8-8h96c4.4 0 8 3.6 8 8s-3.6 8-8 8H64v224c0 70.7 57.3 128 128 128s128-57.3 128-128V16h-40c-4.4 0-8-3.6-8-8s3.6-8 8-8h96c4.4 0 8 3.6 8 8s-3.6 8-8 8h-40v224c0 79.5-64.5 144-144 144S48 319.5 48 240V16H8c-4.4 0-8-3.6-8-8m8 488h368c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
  );
}

export default LanUnderlineThin;
