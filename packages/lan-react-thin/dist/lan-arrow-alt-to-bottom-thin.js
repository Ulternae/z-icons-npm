import React from 'react';

export function LanArrowAltToBottomThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 504c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h368c4.4 0 8-3.6 8-8M197.7 365.7c-3.1 3.1-8.2 3.1-11.3 0l-144-144c-2.3-2.3-3-5.7-1.7-8.7s4.1-5 7.3-5h88c4.4 0 8-3.6 8-8V48c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v152c0 4.4 3.6 8 8 8h88c3.2 0 6.2 1.9 7.4 4.9s.6 6.4-1.7 8.7l-144 144zM256 128V48c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v144H48c-9.7 0-18.5 5.8-22.2 14.8S24.2 226.1 31 233l144 144c9.4 9.4 24.6 9.4 33.9 0L353 233c6.9-6.9 8.9-17.2 5.2-26.2S345.7 192 336 192h-80z"})
  );
}

export default LanArrowAltToBottomThin;
