import React from 'react';

export const LanUserQuestionSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M104.2 128a120 120 0 1 1 240 0 120 120 0 1 1-240 0m-88 354.3C16.2 383.8 96 304 194.5 304h59.4c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7H45.9c-16.4 0-29.7-13.3-29.7-29.7m480-362.3c-16.1 0-29.2 13.1-29.2 29.2 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-42.6 34.6-77.2 77.2-77.2s77.2 34.6 77.2 77.2c0 45.5-34.5 64.7-53.7 71.8-2.3 10.8-11.9 19-23.5 19-13.3 0-24-10.7-24-24 0-20.2 14.6-34.6 29.5-39.5 6-2 12.3-5.1 16.8-9.5 3.9-3.8 6.9-9 6.9-17.7 0-16.1-13.1-29.2-29.2-29.2zm-28 168a28 28 0 1 1 56 0 28 28 0 1 1-56 0"})
);

export default LanUserQuestionSolid;
