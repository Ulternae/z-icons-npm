import React from 'react';

export const LanDownLongToLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M148.7 427.3c6.2 6.2 16.4 6.2 22.6 0l128-128c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9h-72c-4.4 0-8-3.6-8-8V-16c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v280c0 4.4-3.6 8-8 8H32c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4zm33.9 11.3c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9S19.1 256 32 256h64V-16c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v272h64c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128zM8 576c-4.4 0-8-3.6-8-8s3.6-8 8-8h304c4.4 0 8 3.6 8 8s-3.6 8-8 8z"})
);

export default LanDownLongToLineThin;
