import React from 'react';

export const LanRetweetAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M107.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-80 80c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L80 86.6V384c0 53 43 96 96 96h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-35.3 0-64-28.7-64-64V86.6l52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zm361.4 438.6c6.2 6.2 16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L496 425.4V128c0-53-43-96-96-96H272c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c35.3 0 64 28.7 64 64v297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6z"})
);

export default LanRetweetAlt;
