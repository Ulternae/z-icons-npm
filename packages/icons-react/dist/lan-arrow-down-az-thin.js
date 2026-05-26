import React from 'react';

export const LanArrowDownAZThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m237.7 373.7-104 104c-3.1 3.1-8.2 3.1-11.3 0l-104-104c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l90.3 90.3V40c0-4.4 3.6-8 8-8s8 3.6 8 8v412.7l90.3-90.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zM391.2 36.4l63.9 127.9.2.3 23.9 47.8c2 4 .4 8.8-3.6 10.7s-8.8.4-10.7-3.6l-21.8-43.6H325l-21.8 43.6c-2 4-6.8 5.6-10.7 3.6s-5.6-6.8-3.6-10.7l23.9-47.8.2-.3 63.9-127.9c1.4-2.7 4.1-4.4 7.2-4.4s5.8 1.7 7.2 4.4zM384 57.9 332.9 160h102.2zM312 288h144c3.1 0 5.9 1.8 7.2 4.6s.9 6.1-1 8.5L328.9 464H456c4.4 0 8 3.6 8 8s-3.6 8-8 8H312c-3.1 0-5.9-1.8-7.2-4.6s-.9-6.1 1-8.5L439.1 304H312c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanArrowDownAZThin;
