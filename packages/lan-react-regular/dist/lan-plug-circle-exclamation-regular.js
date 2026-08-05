import React from 'react';

export function LanPlugCircleExclamationRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 640 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M184-32c13.3 0 24 10.7 24 24V96h160V-8c0-13.3 10.7-24 24-24s24 10.7 24 24V96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v64.7c-16.7 1.4-32.8 4.9-48 10.3v-74.9H144v80c0 79.5 64.5 144 144 144q9.6 0 18.9-1.2c-3 17.2-6.3 49.8 5.1 88.2v33c0 13.3-10.7 24-24 24s-24-10.7-24-24v-73.5C169.3 402.7 96 321.9 96 224v-80h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h72V-8c0-13.3 10.7-24 24-24m312 288a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 228a20 20 0 1 0 0-40 20 20 0 1 0 0 40m0-180c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-8.8-7.2-16-16-16"})
  );
}

export default LanPlugCircleExclamationRegular;
