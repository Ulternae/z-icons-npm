import React from 'react';

export function LanLessThanThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M479.3 36.6c1.9 4 .1 8.8-3.9 10.6L27 256l448.4 208.8c4 1.9 5.7 6.6 3.9 10.6s-6.6 5.7-10.6 3.9l-464-216C1.8 261.9 0 259.1 0 256s1.8-5.9 4.6-7.3l464-216c4-1.9 8.8-.1 10.6 3.9z"})
  );
}

export default LanLessThanThin;
