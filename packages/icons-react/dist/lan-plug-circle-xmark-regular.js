import React from 'react';

export const LanPlugCircleXmarkRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M184-32c13.3 0 24 10.7 24 24V96h160V-8c0-13.3 10.7-24 24-24s24 10.7 24 24V96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v64.7c-16.7 1.4-32.8 4.9-48 10.3v-74.9H144v80c0 79.5 64.5 144 144 144q9.6 0 18.9-1.2c-3 17.2-6.3 49.8 5.1 88.2v33c0 13.3-10.7 24-24 24s-24-10.7-24-24v-73.5C169.3 402.7 96 321.9 96 224v-80h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h72V-8c0-13.3 10.7-24 24-24m312 288a144 144 0 1 1 0 288 144 144 0 1 1 0-288m59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L496 377.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l36.7 36.7-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L518.6 400z"})
);

export default LanPlugCircleXmarkRegular;
