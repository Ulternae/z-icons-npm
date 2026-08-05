import React from 'react';

export function LanCaretCircleDownThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480m0 496a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-160c-7.3 0-14.3-3-19.3-8.4L134.8 234.4c-4.4-4.7-6.8-10.8-6.8-17.2 0-13.9 11.3-25.2 25.2-25.2h205.6c13.9 0 25.2 11.3 25.2 25.2 0 6.4-2.4 12.5-6.8 17.2L275.3 343.6c-5 5.4-12 8.4-19.3 8.4m-7.6-19.3c2 2.1 4.7 3.3 7.6 3.3s5.6-1.2 7.6-3.3l101.9-109.2c1.6-1.7 2.5-4 2.5-6.3 0-5.1-4.1-9.2-9.2-9.2H153.2c-5.1 0-9.2 4.1-9.2 9.2 0 2.3.9 4.6 2.5 6.3z"})
  );
}

export default LanCaretCircleDownThin;
