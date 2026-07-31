import React from 'react';

export const LanArrowDownAZRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m233.5 385-88 88c-9.4 9.4-24.6 9.4-33.9 0l-88-88c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47V56c0-13.3 10.7-24 24-24s24 10.7 24 24v342.1l47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM406 45.3l80 160c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.3-10.8l-13.6-27.2c-1.6.3-3.2.5-4.9.5h-85.2l-13.4 26.7c-5.9 11.9-20.3 16.7-32.2 10.7S277 217.1 283 205.2l80-160c4.1-8.1 12.4-13.3 21.5-13.3S401.9 37 406 45.2zm-21.5 64.4L363.3 152h42.3l-21.2-42.3zm-96 202.3c0-13.3 10.7-24 24-24h144c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-103 103h86.1c13.3 0 24 10.7 24 24s-10.7 24-24 24h-144c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l103-103h-86.1c-13.3 0-24-10.7-24-24"})
);

export default LanArrowDownAZRegular;
