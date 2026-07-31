import React from 'react';

export const LanVideoQuestionRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352 112c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zM96 64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm368 108v60l64-48v144l-64-48v60l73.6 55.2c4.2 3.1 9.2 4.8 14.4 4.8 13.3 0 24-10.7 24-24V136c0-13.3-10.7-24-24-24-5.2 0-10.2 1.7-14.4 4.8zm-240 12c16.1 0 29.2 13.1 29.2 29.2 0 8.7-3.1 13.9-6.9 17.7-4.5 4.4-10.7 7.5-16.8 9.5-14.9 5-29.5 19.3-29.5 39.5 0 13.3 10.7 24 24 24 11.5 0 21.2-8.1 23.5-19 19.2-7.1 53.7-26.3 53.7-71.8 0-42.6-34.6-77.2-77.2-77.2s-77.2 34.6-77.2 77.2c0 13.3 10.7 24 24 24s24-10.7 24-24c0-16.1 13.1-29.2 29.2-29.2zm28 168a28 28 0 1 0-56 0 28 28 0 1 0 56 0"})
);

export default LanVideoQuestionRegular;
