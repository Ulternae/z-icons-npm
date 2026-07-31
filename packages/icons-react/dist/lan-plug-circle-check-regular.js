import React from 'react';

export const LanPlugCircleCheckRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 640 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M184-32c13.3 0 24 10.7 24 24V96h160V-8c0-13.3 10.7-24 24-24s24 10.7 24 24V96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v64.7c-16.7 1.4-32.8 4.9-48 10.3v-74.9H144v80c0 79.5 64.5 144 144 144q9.6 0 18.9-1.2c-3 17.2-6.3 49.8 5.1 88.2v33c0 13.3-10.7 24-24 24s-24-10.7-24-24v-73.5C169.3 402.7 96 321.9 96 224v-80h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h72V-8c0-13.3 10.7-24 24-24m168 432a144 144 0 1 1 288 0 144 144 0 1 1-288 0m201.4-60.9c-7.1-5.2-17.2-3.6-22.4 3.5l-53 72.9-26.8-26.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c3.3 3.3 7.9 5 12.6 4.6s8.9-2.8 11.7-6.5l64-88c5.2-7.1 3.6-17.2-3.5-22.3"})
);

export default LanPlugCircleCheckRegular;
