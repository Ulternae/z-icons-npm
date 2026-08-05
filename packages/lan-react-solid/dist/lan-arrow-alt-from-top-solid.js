import React from 'react';

export function LanArrowAltFromTopSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 32c0 17.7-14.3 32-32 32H32C14.3 64 0 49.7 0 32S14.3 0 32 0h320c17.7 0 32 14.3 32 32M209 505c-9.4 9.4-24.6 9.4-33.9 0L31 361c-6.9-6.9-8.9-17.2-5.2-26.2S38.3 320 48 320h80V176c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v144h80c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2z"})
  );
}

export default LanArrowAltFromTopSolid;
