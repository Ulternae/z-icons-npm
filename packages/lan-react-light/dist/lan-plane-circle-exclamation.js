import React from 'react';

export function LanPlaneCircleExclamation({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 640 584.077',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 32c0-35.3 28.7-64 64-64s64 28.7 64 64v105l86.9 79.7c-11.3 3.5-22.2 8.1-32.6 13.5L352 180.4V273c-13.1 14.9-24 31.7-32 50.1V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v392c0 4.9-2.2 9.5-6 12.5l-74 59.2v19.8l108.1-27c2.5-.6 5.2-.6 7.8 0l39.1 9.8c9.1 15.2 20.3 29.1 33.1 41.3l-76.1-19-124.1 31c-4.8 1.2-9.8.1-13.7-2.9s-6.2-7.8-6.2-12.7v-48c0-4.9 2.2-9.5 6-12.5l74-59.2v-58.1l-170.9 57c-4.9 1.6-10.2.8-14.4-2.2s-6.7-7.9-6.7-13v-80c0-4.5 1.9-8.8 5.2-11.8L224 137zM64 327v50.8l160-53.3V180.4L64 327.1zm544 73a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-256 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144 44a20 20 0 1 1 0 40 20 20 0 1 1 0-40m0-124c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"})
  );
}

export default LanPlaneCircleExclamation;
