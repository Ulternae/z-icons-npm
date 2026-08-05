import React from 'react';

export function LanCircleDownRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448m0-480a256 256 0 1 0 0 512 256 256 0 1 0 0-512m64 219.3V320H219.3l24.7-24.7c6.2-6.2 6.2-16.4 0-22.6L179.3 208l28.7-28.7 64.7 64.7c3 3 7.1 4.7 11.3 4.7s8.3-1.7 11.3-4.7zm8 132.7c13.3 0 24-10.7 24-24V200c0-21.2-26-32-41-17l-27 27-59-59c-9.4-9.4-24.6-9.4-33.9 0l-40 40c-9.4 9.4-9.4 24.6 0 33.9l59 59-27 27c-15 15-4.3 41 17 41h128z"})
  );
}

export default LanCircleDownRight;
