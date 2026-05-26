import React from 'react';

export const LanHouseCrackThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M245.1 7.2c6.1-5.7 15.7-5.7 21.8 0l234.6 219c3.2 3 3.4 8.1.4 11.3s-8.1 3.4-11.3.4L464 213.1V456c0 30.9-25.1 56-56 56H104c-30.9 0-56-25.1-56-56V213.1l-26.5 24.8c-3.2 3-8.3 2.8-11.3-.4s-2.8-8.3.4-11.3zM256 18.9 64 198.1V456c0 22.1 17.9 40 40 40h145.1l-55.7-83.6c-1.2-1.8-1.6-4.1-1.1-6.3s1.9-4 3.8-5.1l102.1-58.4L194.8 254c-3.4-2.9-3.7-7.9-.9-11.3s7.9-3.7 11.3-.9l112 96c2 1.7 3 4.2 2.8 6.8s-1.7 4.9-4 6.2l-104.6 59.9 56.9 85.3H408c22.1 0 40-17.9 40-40V198.1z"})
);

export default LanHouseCrackThin;
