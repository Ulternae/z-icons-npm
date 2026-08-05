import React from 'react';

export function LanHelicopterRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M208 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h152v48H156l-40.8-54.4c-4.5-6-11.6-9.6-19.2-9.6H48c-7.3 0-14.2 3.3-18.7 9S23 86.1 24.6 93.2l32 144C59 248.2 68.8 256 80 256h132.3l85.6 110c16.7 21.4 42.3 34 69.5 34h88.7c75.1 0 136-60.9 136-136s-61-136-136.1-136h-48V80h152c13.3 0 24-10.7 24-24s-10.7-24-24-24zm152 144v175.3c-9.5-1.8-18.2-7-24.3-14.8l-92.8-119.2c-4.5-5.8-11.5-9.3-18.9-9.3H99.3L78 112h6.1l40.8 54.4c4.5 6 11.6 9.6 19.2 9.6h216zm48 176V176h48c48.6 0 88 39.4 88 88s-39.4 88-88 88zm176 64c-13.3 0-24 10.7-24 24 0 4.4-3.6 8-8 8H280c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c30.9 0 56-25.1 56-56 0-13.3-10.7-24-24-24"})
  );
}

export default LanHelicopterRegular;
