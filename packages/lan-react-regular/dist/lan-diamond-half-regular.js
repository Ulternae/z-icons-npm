import React from 'react';

export function LanDiamondHalfRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M241.2 11.8c9 3.7 14.8 12.5 14.8 22.2v444.1c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2L17 297C6.1 286.1 0 271.4 0 256s6.1-30.1 17-41L215 17c6.9-6.9 17.2-8.9 26.2-5.2M208 91.9 50.9 249c-1.9 1.9-2.9 4.4-2.9 7s1 5.2 2.9 7L208 420.1z"})
  );
}

export default LanDiamondHalfRegular;
