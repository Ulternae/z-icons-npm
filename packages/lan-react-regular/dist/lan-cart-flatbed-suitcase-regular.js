import React from 'react';

export function LanCartFlatbedSuitcaseRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 24C0 10.7 10.7 0 24 0h32c30.9 0 56 25.1 56 56v320c0 13.3 10.7 24 24 24h416c13.3 0 24 10.7 24 24s-10.7 24-24 24h-42.7c1.8 5 2.7 10.4 2.7 16 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H221.2c1.8 5 2.7 10.4 2.7 16 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.7 1-11.1 2.8-16.2-37.3-2.7-66.8-33.8-66.8-71.8L64 56c0-4.4-3.6-8-8-8H24C10.7 48 0 37.3 0 24m464 120H208v160h256zM208 96h48V72c0-30.9 25.1-56 56-56h48c30.9 0 56 25.1 56 56v24h48c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48m96 0h64V72c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8z"})
  );
}

export default LanCartFlatbedSuitcaseRegular;
