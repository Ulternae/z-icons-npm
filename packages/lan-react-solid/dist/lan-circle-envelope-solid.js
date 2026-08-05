import React from 'react';

export function LanCircleEnvelopeSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-14.9-244.1-100.7-60.5c-7.7-4.6-12.4-12.9-12.4-21.9 0-14.1 11.4-25.5 25.5-25.5h204.9c14.1 0 25.5 11.4 25.5 25.5 0 9-4.7 17.3-12.4 21.9l-100.6 60.5c-4.5 2.7-9.6 4.1-14.9 4.1s-10.4-1.4-14.9-4.1M384 237.3V320c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-82.7l96.7 58c9.4 5.7 20.3 8.7 31.3 8.7s21.9-3 31.3-8.7z"})
  );
}

export default LanCircleEnvelopeSolid;
