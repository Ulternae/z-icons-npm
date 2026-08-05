import React from 'react';

export function LanInfo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 192 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M72 56a24 24 0 1 1 48 0 24 24 0 1 1-48 0M0 176c0-8.8 7.2-16 16-16h64c17.7 0 32 14.3 32 32v256h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V192H16c-8.8 0-16-7.2-16-16"})
  );
}

export default LanInfo;
