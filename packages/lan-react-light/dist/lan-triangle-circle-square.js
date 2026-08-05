import React from 'react';

export function LanTriangleCircleSquare({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m256 32-96 160h192zm0-32c11.2 0 21.7 5.9 27.4 15.5l96 160c5.9 9.9 6.1 22.2.4 32.2S363.5 224 352 224H160c-11.5 0-22.2-6.2-27.8-16.2s-5.5-22.3.4-32.2l96-160C234.3 5.9 244.8 0 256 0M128 464a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224m312 48H328c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8V328c0-4.4-3.6-8-8-8m-112-32h112c22.1 0 40 17.9 40 40v112c0 22.1-17.9 40-40 40H328c-22.1 0-40-17.9-40-40V328c0-22.1 17.9-40 40-40"})
  );
}

export default LanTriangleCircleSquare;
