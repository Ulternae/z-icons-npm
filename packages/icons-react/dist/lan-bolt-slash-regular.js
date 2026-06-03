import React from 'react';

export const LanBoltSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.013 -31.975 576.013 576.025',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-25c-9.4-9.3-24.6-9.3-34 0S-2.3-.4 7 9l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L404.6 338.8l95.7-85.6c7.4-6.7 11.7-16.2 11.7-26.1 0-19.4-15.7-35.1-35.1-35.1h-121l58.8-176.4c3.4-10.3-.5-21.7-9.6-27.6s-21-5.2-29.1 2L207.1 141.1zm200.1 200.1L340.7 86l-40.8 122.3c-2.4 7.3-1.2 15.4 3.3 21.6s11.8 10 19.5 10h120.4l-72.4 64.8zm-5.7 250.6 30.2-90.5-63.3-63.3h-69.2l36.5-32.7-34-34-59.8 53.5c-7.4 6.7-11.7 16.2-11.7 26.1 0 19.4 15.7 35.1 35.1 35.1h121l-58.8 176.4c-3.4 10.3.5 21.7 9.6 27.6s21.1 5.1 29.2-2.2l133-119-34-34-63.7 57z"})
);

export default LanBoltSlashRegular;
