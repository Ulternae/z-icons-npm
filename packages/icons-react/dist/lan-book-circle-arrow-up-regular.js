import React from 'react';

export const LanBookCircleArrowUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M120 0C71.4 0 32 39.4 32 88v344c0 44.2 35.8 80 80 80h164c-10.5-14.6-19-30.7-25.1-48H112c-17.7 0-32-14.3-32-32s14.3-32 32-32h128c0-16.6 2.1-32.7 6-48H112c-11.4 0-22.2 2.4-32 6.7V88c0-22.1 17.9-40 40-40h288c13.3 0 24 10.7 24 24v136c16.6 0 32.7 2.1 48 6V72c0-39.8-32.2-72-72-72zm312 256a144 144 0 1 0 0 288 144 144 0 1 0 0-288m-67.3 147.3c-6.2-6.2-6.2-16.4 0-22.6l56-56c6.2-6.2 16.4-6.2 22.6 0l56 56c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L448 374.6V464c0 8.8-7.2 16-16 16s-16-7.2-16-16v-89.4l-28.7 28.7c-6.2 6.2-16.4 6.2-22.6 0"})
);

export default LanBookCircleArrowUpRegular;
