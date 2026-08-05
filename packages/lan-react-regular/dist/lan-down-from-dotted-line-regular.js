import React from 'react';

export function LanDownFromDottedLineRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M209 505c-9.4 9.4-24.6 9.4-33.9 0L31 361c-6.9-6.9-8.9-17.2-5.2-26.2S38.3 320 48 320h64V176c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v144h64c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2zm15-249v-80h-64v168c0 13.3-10.7 24-24 24h-30.1l86.1 86.1 86.1-86.1H248c-13.3 0-24-10.7-24-24zM32 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64m106.7 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64m138.6 32a32 32 0 1 1-64 0 32 32 0 1 1 64 0M352 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
  );
}

export default LanDownFromDottedLineRegular;
