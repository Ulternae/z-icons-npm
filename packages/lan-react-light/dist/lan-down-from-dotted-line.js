import React from 'react';

export function LanDownFromDottedLine({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M209 505c-9.4 9.4-24.6 9.4-33.9 0l-144-144c-6.9-6.9-8.9-17.2-5.2-26.2S38.3 320 48 320h80V176c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v144h80c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2zm15-249v-80c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v160c0 8.8-7.2 16-16 16H67.3L192 476.7 316.7 352H240c-8.8 0-16-7.2-16-16zM24 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48m112 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48m136 24a24 24 0 1 1-48 0 24 24 0 1 1 48 0m88-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
  );
}

export default LanDownFromDottedLine;
