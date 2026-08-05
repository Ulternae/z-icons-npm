import React from 'react';

export function LanArrowUpZA({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M139.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L112 86.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zM312 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h108.1l-120 133.3c-4.2 4.7-5.3 11.4-2.7 17.2s8.3 9.5 14.6 9.5h144c8.8 0 16-7.2 16-16s-7.2-16-16-16H347.9l120-133.3c4.2-4.7 5.3-11.4 2.7-17.2S462.3 32 456 32zm86.3 264.8c-2.7-5.4-8.2-8.8-14.3-8.8s-11.6 3.4-14.3 8.8l-63.9 127.8-.3.6-15.8 31.7c-4 7.9-.7 17.5 7.2 21.5s17.5.7 21.5-7.2L330 448h108.2l11.6 23.2c4 7.9 13.6 11.1 21.5 7.2s11.1-13.6 7.2-21.5l-15.8-31.7-.3-.6zM422.1 416h-76.2l38.1-76.2z"})
  );
}

export default LanArrowUpZA;
