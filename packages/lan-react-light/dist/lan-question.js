import React from 'react';

export function LanQuestion({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 160C32 89.3 89.3 32 160 32s128 57.3 128 128c0 53.5-32.8 99.3-79.5 118.5-31.1 12.8-64.5 41-64.5 81.5v24c0 8.8 7.2 16 16 16s16-7.2 16-16v-24c0-21.3 18.5-41.2 44.7-51.9C278.9 284.2 320 226.9 320 160 320 71.6 248.4 0 160 0S0 71.6 0 160c0 8.8 7.2 16 16 16s16-7.2 16-16m128 352c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24"})
  );
}

export default LanQuestion;
