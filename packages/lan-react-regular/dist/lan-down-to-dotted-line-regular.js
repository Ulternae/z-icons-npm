import React from 'react';

export function LanDownToDottedLineRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32m106.7 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32m74.7-32c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32M352 512c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32M209 377c-9.4 9.4-24.6 9.4-33.9 0L31 233c-6.9-6.9-8.9-17.2-5.2-26.2S38.3 192 48 192h64V48c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v144h64c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2zm15-249V48h-64v168c0 13.3-10.7 24-24 24h-30.1l86.1 86.1 86.1-86.1H248c-13.3 0-24-10.7-24-24z"})
  );
}

export default LanDownToDottedLineRegular;
