import React from 'react';

export function LanCheckToSlot({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M560 288c8.8 0 16 7.2 16 16v112c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V304c0-8.8 7.2-16 16-16s16 7.2 16 16v112c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V304c0-8.8 7.2-16 16-16M416 32c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM160 64c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm195.1 58.2c5.2-7.1 15.2-8.7 22.3-3.5s8.7 15.2 3.5 22.3L275.3 286.2c-2.8 3.8-7.1 6.2-11.8 6.5s-9.3-1.4-12.6-4.8l-54.4-56.3c-6.1-6.4-6-16.5.4-22.6s16.5-5.9 22.6.4l41.2 42.6z"})
  );
}

export default LanCheckToSlot;
