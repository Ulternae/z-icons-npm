import React from 'react';

export const LanPlaneCircleCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 32c0-35.3 28.7-64 64-64s64 28.7 64 64v105l86.9 79.7c-11.3 3.5-22.2 8.1-32.6 13.5L352 180.4V273c-13.1 14.9-24 31.7-32 50.1V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v392c0 4.9-2.2 9.5-6 12.5l-74 59.2v19.8l108.1-27c2.5-.6 5.2-.6 7.8 0l39.1 9.8c9.1 15.2 20.3 29.1 33.1 41.3l-76.1-19-124.1 31c-4.8 1.2-9.8.1-13.7-2.9s-6.2-7.8-6.2-12.7v-48c0-4.9 2.2-9.5 6-12.5l74-59.2v-58.1l-170.9 57c-4.9 1.6-10.2.8-14.4-2.2s-6.7-7.9-6.7-13v-80c0-4.5 1.9-8.8 5.2-11.8L224 137zM64 327v50.8l160-53.3V180.4L64 327.1zm432 185a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m57.4 83.1c7.1 5.2 8.7 15.2 3.5 22.4l-64 88c-2.8 3.8-7 6.2-11.7 6.5s-9.3-1.3-12.6-4.6l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l26.8 26.8 53-72.9c5.2-7.1 15.2-8.7 22.4-3.5z"})
);

export default LanPlaneCircleCheck;
