import React from 'react';

export const LanPersonMilitaryPointing = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 59.1V64h128V37.8zm142.2 36.1q1.8 8.1 1.8 16.8c0 44.2-35.8 80-80 80s-80-35.8-80-80q0-8.7 1.8-16.8C199.6 92.5 192 83.1 192 72V52.3c0-11.7 8.5-21.7 20.1-23.7l144-24c14.6-2.4 27.9 8.9 27.9 23.7V72c0 11.1-7.5 20.4-17.8 23.2m-33 .8h-90.5c-1.8 5-2.7 10.4-2.7 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16zM0 240c0-8.8 7.2-16 16-16h296.3c40.2 0 77.3 21.5 97.2 56.4l100.4 175.7c4.4 7.7 1.7 17.4-6 21.8s-17.4 1.7-21.8-6L384 300.2V464c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V256.1H16c-8.8 0-16-7.2-16-16zm224 224c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-16H224zm128-168c0-4.3-.7-8.5-1.9-12.4L241.8 416H352zm-40-40h-88v131.2l104.4-127.6c-5-2.3-10.6-3.5-16.4-3.5z"})
);

export default LanPersonMilitaryPointing;
