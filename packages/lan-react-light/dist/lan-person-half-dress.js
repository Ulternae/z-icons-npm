import React from 'react';

export function LanPersonHalfDress({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 384 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M216 24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m-11.4 173.9L44.5 298c-5.5 6.9-15.6 8-22.5 2.5s-8-15.6-2.5-22.5l108.8-136c12.1-15.1 29-25.1 47.7-28.6v38.7c-2.7 2.6-4.7 5.8-5.9 9.5l-62 190.5H176v32h-16v144c0 8.8-7.2 16-16 16s-16-7.2-16-16v-144H86c-10.9 0-18.6-10.6-15.2-21L124.5 198zM240 368h-32v-32h32V156.7c-9.8-5.6-20.7-9.5-32-11.4V113c39 4.9 74.1 27.4 94.7 61.7l63.1 105.1c4.5 7.6 2.1 17.4-5.5 21.9s-17.4 2.1-22-5.5l-63.1-105.1c-1-1.7-2.1-3.4-3.2-5V528c0 8.8-7.2 16-16 16s-16-7.2-16-16z"})
  );
}

export default LanPersonHalfDress;
