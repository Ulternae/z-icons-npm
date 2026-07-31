import React from 'react';

export const LanRectangleNARegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M512 64c35.3 0 64 28.7 64 64v256l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-448l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 384V128c0-35.3 28.7-64 64-64zM64 112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zm216.4 51.7c2.4-13 14.9-21.7 27.9-19.3s21.7 14.9 19.3 27.9l-32 176c-2.4 13-14.9 21.7-27.9 19.3s-21.7-14.9-19.3-27.9zM200 160c13.3 0 24 10.7 24 24v144c0 10.9-7.4 20.5-18 23.2s-21.7-2-27-11.6l-35-63.1v51.4c0 13.3-10.7 24-24 24s-24-10.7-24-24v-144l.3-4c1.6-9.2 8.4-16.8 17.6-19.2 10.6-2.7 21.7 2 27 11.6l35 63v-51.4c0-13.3 10.7-24 24-24zm216 0c35.3 0 64 28.7 64 64v104c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24h-32v24c0 13.3-10.7 24-24 24s-24-10.7-24-24V224c0-35.3 28.7-64 64-64m0 48c-8.8 0-16 7.2-16 16v32h32v-32c0-8.8-7.2-16-16-16"})
);

export default LanRectangleNARegular;
