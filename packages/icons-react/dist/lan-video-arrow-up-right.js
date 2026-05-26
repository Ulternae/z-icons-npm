import React from 'react';

export const LanVideoArrowUpRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 96c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM96 64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm441.6 52.8L464 172v40l80-60v208l-80-60v40l73.6 55.2c4.2 3.1 9.2 4.8 14.4 4.8 13.3 0 24-10.7 24-24V136c0-13.3-10.7-24-24-24-5.2 0-10.2 1.7-14.4 4.8M288 304c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h89.4L132.7 324.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L288 214.6z"})
);

export default LanVideoArrowUpRight;
