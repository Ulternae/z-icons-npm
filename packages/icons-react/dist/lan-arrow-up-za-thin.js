import React from 'react';

export const LanArrowUpZAThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M312 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h127.1L305.8 210.9c-2 2.4-2.4 5.7-1 8.5s4.1 4.6 7.2 4.6h144c4.4 0 8-3.6 8-8s-3.6-8-8-8H328.9L462.2 45.1c2-2.4 2.4-5.7 1-8.5S459.1 32 456 32zm79.2 260.4c-1.4-2.7-4.1-4.4-7.2-4.4s-5.8 1.7-7.2 4.4l-63.9 127.9-.1.3-23.9 47.8c-2 4-.4 8.8 3.6 10.7s8.8.4 10.7-3.6l21.8-43.6h118.1l21.8 43.6c2 4 6.8 5.6 10.7 3.6s5.6-6.8 3.6-10.7l-23.9-47.8-.1-.3-63.9-127.9zm-7.2 21.5L435.1 416H332.9zM133.7 34.3c-3.1-3.1-8.2-3.1-11.3 0l-104 104c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L120 59.3V472c0 4.4 3.6 8 8 8s8-3.6 8-8V59.3l90.3 90.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-104-104z"})
);

export default LanArrowUpZAThin;
