import React from 'react';

export function LanUserAltSlash({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.85 576 575.9',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-61-61c-.1-.4-.1-.9-.2-1.3l-6.2-5.1-195.1-195.1C369.6 244.4 416 191.6 416 128 416 57.3 358.7 0 288 0c-63.6 0-116.4 46.4-126.3 107.2zM192.5 138c-.3-3.3-.5-6.6-.5-10 0-53 43-96 96-96s96 43 96 96-43 96-96 96c-3.4 0-6.7-.2-10-.5zm73.7 198-31.9-31.9C139.7 307.1 64 384.7 64 480v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-79.5 64.5-144 144-144z"})
  );
}

export default LanUserAltSlash;
