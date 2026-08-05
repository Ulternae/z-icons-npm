import React from 'react';

export function LanDownToDottedLineSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 480c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32m209-103c-9.4 9.4-24.6 9.4-33.9 0L31 233c-6.9-6.9-8.9-17.2-5.2-26.2S38.3 192 48 192h80V48c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v144h80c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2zm-70.3 135c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32m74.7-32c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32M352 512c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32"})
  );
}

export default LanDownToDottedLineSolid;
