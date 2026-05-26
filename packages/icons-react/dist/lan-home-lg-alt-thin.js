import React from 'react';

export const LanHomeLgAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M245.1 7.2c6.1-5.7 15.7-5.7 21.8 0l234.6 219c3.2 3 3.4 8.1.4 11.3s-8.1 3.4-11.3.4L464 213.1V456c0 30.9-25.1 56-56 56H104c-30.9 0-56-25.1-56-56V213.1l-26.5 24.8c-3.2 3-8.3 2.8-11.3-.4s-2.8-8.3.4-11.3zM256 18.9 64 198.1V456c0 22.1 17.9 40 40 40h72V376c0-30.9 25.1-56 56-56h48c30.9 0 56 25.1 56 56v120h72c22.1 0 40-17.9 40-40V198.1zM192 496h128V376c0-22.1-17.9-40-40-40h-48c-22.1 0-40 17.9-40 40z"})
);

export default LanHomeLgAltThin;
