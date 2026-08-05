import React from 'react';

export function LanBusinessTime({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M272 32h96c8.8 0 16 7.2 16 16v48H256V48c0-8.8 7.2-16 16-16m-48 16v48h-96c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h193.4c-4.7-10.2-8.5-20.9-11.4-32H128c-17.7 0-32-14.3-32-32V288h144v48c0 17.7 14.3 32 32 32h34.7c1.8-11 4.6-21.7 8.3-32h-42.9v-48h68c8.4-11.7 18.2-22.5 29-32h-273v-96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v54c11.1 2.9 21.8 6.7 32 11.4V160c0-35.3-28.7-64-64-64h-96V48c0-26.5-21.5-48-48-48H272c-26.5 0-48 21.5-48 48m272 240a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-224c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-48c0-8.8-7.2-16-16-16"})
  );
}

export default LanBusinessTime;
