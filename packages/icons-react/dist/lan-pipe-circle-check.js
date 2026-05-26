import React from 'react';

export const LanPipeCircleCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 96c8.8 0 16 7.2 16 16v16h448v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v132c-10-7.2-20.7-13.4-32-18.6V160H64v192h182c-2.7 10.4-4.5 21-5.4 32H64v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16m384 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m57.4 83.1c7.1 5.2 8.7 15.2 3.5 22.4l-64 88c-2.8 3.8-7 6.2-11.7 6.5s-9.3-1.3-12.6-4.6l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l26.8 26.8 53-72.9c5.2-7.1 15.2-8.7 22.4-3.5z"})
);

export default LanPipeCircleCheck;
