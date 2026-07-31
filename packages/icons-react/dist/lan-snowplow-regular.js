import React from 'react';

export const LanSnowplowRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 80v48c-35.3 0-64 28.7-64 64v129.6c-19.8 20.2-32 47.9-32 78.4 0 61.9 50.1 112 112 112h224c61.9 0 112-50.1 112-112 0-20.4-5.5-39.5-15-56h63v80c0 48.6 39.4 88 88 88 13.3 0 24-10.7 24-24s-10.7-24-24-24c-22.1 0-40-17.9-40-40V216c0-22.1 17.9-40 40-40 13.3 0 24-10.7 24-24s-10.7-24-24-24c-48.6 0-88 39.4-88 88v80h-80v-56.9c0-9.9-2.3-19.7-6.8-28.6L353.7 35.4C342.8 13.7 320.7 0 296.4 0H192c-35.3 0-64 28.7-64 64zm272 160v52.6c-10.1-3-20.9-4.6-32-4.6H144c-11.1 0-21.9 1.6-32 4.6V192c0-8.8 7.2-16 16-16h24.7l90 60c3.9 2.6 8.6 4 13.3 4zM176 133.8V64c0-8.8 7.2-16 16-16h104.4c6.1 0 11.6 3.4 14.3 8.8L378.3 192H263.2l-87.3-58.2zM80 400c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64s-28.7 64-64 64H144c-35.3 0-64-28.7-64-64m104 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m168 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-72-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanSnowplowRegular;
