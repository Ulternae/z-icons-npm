import React from 'react';

export function LanNoteThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M261.5 464q5.4 0 10.5-1.2V360c0-30.9 25.1-56 56-56h102.8q1.2-5.1 1.2-10.5V96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48zm156.4-136.6c2.3-2.3 4.3-4.8 6.1-7.4h-96c-22.1 0-40 17.9-40 40v96c2.7-1.8 5.1-3.8 7.4-6.1zM64 480c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v197.5c0 17-6.7 33.3-18.7 45.3L306.7 461.3c-12 12-28.3 18.7-45.3 18.7zm32-112a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16-208a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-16 96a16 16 0 1 1 32 0 16 16 0 1 1-32 0"})
  );
}

export default LanNoteThin;
