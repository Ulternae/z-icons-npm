import React from 'react';

export const LanBrakeWarning = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448m0-416a192 192 0 1 0 0 384 192 192 0 1 0 0-384M50.5 83.3c4.8-7.4 14.7-9.6 22.1-4.8s9.6 14.7 4.8 22.1C48.7 145.4 32 198.8 32 256s16.7 110.6 45.5 155.4c4.8 7.4 2.6 17.3-4.8 22.1s-17.4 2.6-22.1-4.8C18.6 378.9.1 319.6.1 256S18.5 133.1 50.5 83.3m516.8-4.8c7.4-4.8 17.3-2.6 22.1 4.8 32 49.8 50.5 109.1 50.5 172.7s-18.6 122.8-50.5 172.7c-4.8 7.4-14.7 9.6-22.1 4.8s-9.6-14.7-4.8-22.1C591.3 366.6 608 313.3 608 256s-16.7-110.6-45.5-155.4c-4.8-7.4-2.6-17.4 4.8-22.1M320 384a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-256c13.5 0 24.3 11.4 23.5 24.9l-7.6 136c-.5 8.5-7.5 15.1-16 15.1s-15.5-6.6-16-15.1l-7.6-136c-.8-13.5 10-24.9 23.5-24.9z"})
);

export default LanBrakeWarning;
