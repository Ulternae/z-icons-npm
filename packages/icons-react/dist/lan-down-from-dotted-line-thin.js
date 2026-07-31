import React from 'react';

export const LanDownFromDottedLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m186.3 493.7-144-144c-2.3-2.3-3-5.7-1.7-8.7s4.2-5 7.4-5h88c4.4 0 8-3.6 8-8V176c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v152c0 4.4 3.6 8 8 8h88c3.2 0 6.2 1.9 7.4 4.9s.6 6.4-1.7 8.7l-144 144c-3.1 3.1-8.2 3.1-11.3 0zM256 256v-80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v144H48c-9.7 0-18.5 5.8-22.2 14.8S24.2 354.1 31 361l144 144c9.4 9.4 24.6 9.4 33.9 0L353 361c6.9-6.9 8.9-17.2 5.2-26.2S345.7 320 336 320h-80zM0 16a16 16 0 1 0 32 0 16 16 0 1 0-32 0m88 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0m104 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m72-16a16 16 0 1 0 32 0 16 16 0 1 0-32 0m104 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
);

export default LanDownFromDottedLineThin;
