import React from 'react';

export const LanArrowArcheryThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -23.949 576 551.998',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M558.5-23.7c2.7-.7 5.6.1 7.6 2.1s2.8 4.9 2.1 7.6l-32 128c-.7 2.8-2.9 5-5.6 5.8-2.8.8-5.8 0-7.8-2.1l-42.3-42.3-319.1 319.1 14.9 59.6c.7 2.7-.1 5.6-2.1 7.6l-64 64c-2 2-5 2.8-7.8 2.1-2.8-.8-4.9-3-5.6-5.8L82 462.6l-59.3-14.8c-2.8-.7-5-2.8-5.8-5.6s0-5.7 2.1-7.8l64-64 1.7-1.3c1.8-1 3.9-1.4 5.9-.8l59.4 14.8L469.1 64l-42.3-42.3c-2-2-2.8-5-2.1-7.8s3-4.9 5.8-5.6zM40.1 435.7l50.3 12.6 2 .8c1.9 1.1 3.2 2.9 3.8 5l12.6 50.3 50.8-50.8-13.7-55-55-13.7zm408-415.3L486 58.2l.2.2c.1.1.1.1.1.2l37.8 37.7L549.5-5 448.1 20.3z"})
);

export default LanArrowArcheryThin;
