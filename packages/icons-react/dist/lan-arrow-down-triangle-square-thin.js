import React from 'react';

export const LanArrowDownTriangleSquareThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m237.7 373.7-104 104c-3.1 3.1-8.2 3.1-11.3 0l-104-104c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l90.3 90.3V40c0-4.4 3.6-8 8-8s8 3.6 8 8v412.7l90.3-90.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zM384 32c9.9 0 19.1 5.2 24.2 13.7L492.4 186c2.3 3.9 3.6 8.4 3.6 12.9 0 13.8-11.2 25.1-25.1 25.1H297c-13.8 0-25.1-11.2-25.1-25.1 0-4.5 1.2-9 3.6-12.9l84.3-140.3C364.9 37.2 374.1 32 384 32m-80 400c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32zm-14.7-237.7c-.8 1.4-1.3 3-1.3 4.7 0 5 4.1 9.1 9.1 9.1H471c5 0 9.1-4.1 9.1-9.1 0-1.6-.4-3.3-1.3-4.7L394.5 54c-2.2-3.7-6.2-6-10.5-6s-8.3 2.3-10.5 6zM288 432v-96c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48"})
);

export default LanArrowDownTriangleSquareThin;
