import React from 'react';

export function LanPipeCircleCheckThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M80 384c0 8.8-7.2 16-16 16s-16-7.2-16-16V128c0-8.8 7.2-16 16-16s16 7.2 16 16zM64 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32s32-14.3 32-32h144.7c.4-5.4 1.1-10.7 2-16H96V144h384v70c5.4 1.4 10.8 3 16 4.9V128c0-8.8 7.2-16 16-16s16 7.2 16 16v105.7c5.5 3.2 10.9 6.6 16 10.3V128c0-17.7-14.3-32-32-32s-32 14.3-32 32H96c0-17.7-14.3-32-32-32m368 176a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m60.7-212.5c-3.6-2.6-8.6-1.8-11.2 1.8l-74 101.7-33.4-40.1c-2.8-3.4-7.9-3.9-11.3-1s-3.9 7.9-1 11.3l40 48c1.6 1.9 3.9 3 6.4 2.9s4.8-1.3 6.2-3.3l80-110c2.6-3.6 1.8-8.6-1.8-11.2z"})
  );
}

export default LanPipeCircleCheckThin;
