import React from 'react';

export function LanHeartHalfSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M133.1 32C59.6 32 0 91.6 0 165.1 0 233.7 42.9 294 79.1 337.9c44.1 53.6 97.3 100.1 133.8 127.9 2.3 1.7 4.7 3.3 7.1 4.8 7.4 4.3 16.6 4.3 24 0s12-12.2 12-20.8V115.6c0-5.1-1.6-10-4.6-14.1L241 87.1C216 52.5 175.8 32 133.1 32"})
  );
}

export default LanHeartHalfSolid;
