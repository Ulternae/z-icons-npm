import React from 'react';

export function LanArrowAltFromTopThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m197.7 493.7 144-144c2.3-2.3 3-5.7 1.7-8.7s-4.2-4.9-7.4-4.9h-88c-4.4 0-8-3.6-8-8v-152c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v152c0 4.4-3.6 8-8 8H48c-3.2 0-6.2 1.9-7.4 4.9s-.6 6.4 1.7 8.7l144 144c3.1 3.1 8.2 3.1 11.3 0zM128 256v-80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v144h80c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2L209 505c-9.4 9.4-24.6 9.4-33.9 0L31 361c-6.9-6.9-8.9-17.2-5.2-26.2S38.3 320 48 320h80zM384 8c0 4.4-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h368c4.4 0 8 3.6 8 8"})
  );
}

export default LanArrowAltFromTopThin;
