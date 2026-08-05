import React from 'react';

export function LanGemThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128.5 32c-2.5 0-4.9 1.2-6.4 3.2l-120 160c-2.3 3.1-2.1 7.4.5 10.2l248 272c1.5 1.7 3.7 2.6 5.9 2.6s4.4-.9 5.9-2.6l248-272c2.6-2.8 2.8-7.1.5-10.2l-120-160c-1.5-2-3.9-3.2-6.4-3.2zm.2 21.1L239.9 192H24.5zM26.6 208h459.8L256.5 460.1zm461.9-16H273.1L384.3 53.1zM367.9 48 256.5 187.2 145.1 48z"})
  );
}

export default LanGemThin;
