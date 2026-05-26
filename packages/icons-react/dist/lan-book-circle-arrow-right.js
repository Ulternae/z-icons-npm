import React from 'react';

export const LanBookCircleArrowRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 0C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h180c-7.2-10-13.4-20.7-18.6-32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h144.7c-.9-10.5-.9-21.5 0-32H96c-11.7 0-22.6 3.1-32 8.6V64c0-17.7 14.3-32 32-32h336c8.8 0 16 7.2 16 16v160.7c11 .9 21.6 2.7 32 5.4v-166c0-26.5-21.5-48-48-48zm336 288a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m-3.3-211.3c-6.2 6.2-6.2 16.4 0 22.6l28.7 28.7H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h89.4l-28.7 28.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l56-56c6.2-6.2 6.2-16.4 0-22.6l-56-56c-6.2-6.2-16.4-6.2-22.6 0"})
);

export default LanBookCircleArrowRight;
