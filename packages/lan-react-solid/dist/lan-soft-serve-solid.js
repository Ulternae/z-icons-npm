import React from 'react';

export function LanSoftServeSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 384 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M208-32c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l6.1 6.1c3.4 3.4 5.3 7.9 5.3 12.7 0 9.9-8 17.9-17.9 17.9H128c-35.3 0-64 28.7-64 64 0 11.8 3.2 22.9 8.8 32.4C40.8 132 16 159.1 16 192c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64s-28.7-64-64-64h-2.3c11.4-14.4 18.3-32.7 18.3-52.6C320 16.1 271.9-32 212.6-32zM64 304v48c0 17.7 14.3 32 32 32h2.7l10.9 130.7c1.4 16.6 15.2 29.3 31.9 29.3h101.1c16.6 0 30.5-12.8 31.9-29.3L285.4 384h2.7c17.7 0 32-14.3 32-32v-48h-256z"})
  );
}

export default LanSoftServeSolid;
