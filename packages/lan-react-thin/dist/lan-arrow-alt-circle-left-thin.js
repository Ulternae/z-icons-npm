import React from 'react';

export function LanArrowAltCircleLeftThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 256a240 240 0 1 1 480 0 240 240 0 1 1-480 0m496 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0m-373.7 5.7c-3.1-3.1-3.1-8.2 0-11.3l88-88c2.3-2.3 5.7-3 8.7-1.7s4.9 4.2 4.9 7.4v48c0 4.4 3.6 8 8 8h112c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-112c-4.4 0-8 3.6-8 8v48c0 3.2-1.9 6.2-4.9 7.4s-6.4.6-8.7-1.7l-88-88zM127 239c-9.4 9.4-9.4 24.6 0 33.9l88 88c6.9 6.9 17.2 8.9 26.2 5.2S256 353.7 256 344v-40h104c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24H256v-40c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2z"})
  );
}

export default LanArrowAltCircleLeftThin;
