import React from 'react';

export function LanUpToDottedLineThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 16a16 16 0 1 0 32 0 16 16 0 1 0-32 0m88 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0M192 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32m72 16a16 16 0 1 0 32 0 16 16 0 1 0-32 0M368 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32M186.3 146.3c3.1-3.1 8.2-3.1 11.3 0l144 144c2.3 2.3 3 5.7 1.7 8.7s-4.2 4.9-7.4 4.9h-88c-4.4 0-8 3.6-8 8v152c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-152c0-4.4-3.6-8-8-8h-88c-3.2 0-6.2-1.9-7.4-4.9s-.6-6.4 1.7-8.7l144-144zM128 384v80c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V320h80c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2L209 135c-9.4-9.4-24.6-9.4-33.9 0L31 279c-6.9 6.9-8.9 17.2-5.2 26.2S38.3 320 48 320h80z"})
  );
}

export default LanUpToDottedLineThin;
