import React from 'react';

export function LanDiamondExclamationRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 0c15.4 0 30.1 6.1 41 17l198 198c10.9 10.9 17 25.6 17 41s-6.1 30.1-17 41L297 495c-10.9 10.9-25.6 17-41 17s-30.1-6.1-41-17L17 297C6.1 286.1 0 271.4 0 256s6.1-30.1 17-41L215 17c10.9-10.9 25.6-17 41-17m0 48c-2.6 0-5.2 1-7 2.9L50.9 249c-1.9 1.9-2.9 4.4-2.9 7s1 5.2 2.9 7L249 461.1c1.9 1.9 4.4 2.9 7 2.9s5.2-1 7-2.9L461.1 263c1.9-1.9 2.9-4.4 2.9-7s-1-5.2-2.9-7L263 50.9c-1.9-1.9-4.4-2.9-7-2.9m0 336a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-256c18.2 0 32.7 15.5 31.4 33.7l-7.4 104c-.9 12.6-11.4 22.3-23.9 22.3-12.6 0-23-9.7-23.9-22.3l-7.4-104c-1.5-18.2 13-33.7 31.2-33.7"})
  );
}

export default LanDiamondExclamationRegular;
