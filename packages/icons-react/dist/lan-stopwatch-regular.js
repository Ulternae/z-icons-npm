import React from 'react';

export const LanStopwatchRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M144 24c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v25.3c49.6 5.5 94.1 27.7 127.8 61L399 111c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-26.8 26.8c21.4 33.5 33.9 73.4 33.9 116.2 0 119.3-96.7 216-216 216S8 407.3 8 288C8 176.8 92 85.3 200 73.3V48h-32c-13.3 0-24-10.7-24-24m80 96a168 168 0 1 0 0 336 168 168 0 1 0 0-336m24 64v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanStopwatchRegular;
