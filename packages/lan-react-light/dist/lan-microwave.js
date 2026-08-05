import React from 'react';

export function LanMicrowave({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 96c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zm-32 352v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16zm-32-272v160c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16s-16 7.2-16 16M128 320V192h224v128zM96 184v144c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24V184c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24"})
  );
}

export default LanMicrowave;
