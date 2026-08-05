import React from 'react';

export function LanHouseCircleExclamationThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M277.1 7.2c6.1-5.7 15.7-5.7 21.8 0L515 208.9c-6.2-.6-12.6-.9-19-.9-1.8 0-3.6 0-5.4.1L288 18.9 96 198.1V456c0 22.1 17.9 40 40 40h72V376c0-30.9 25.1-56 56-56h48c3.1 0 6.1.2 9.1.7-2.3 5-4.3 10.1-6.2 15.4-1-.1-1.9-.1-2.9-.1h-48c-22.1 0-40 17.9-40 40v120h105.7c3.2 5.5 6.6 10.9 10.3 16H136c-30.9 0-56-25.1-56-56V213.1l-26.5 24.8c-3.2 3-8.3 2.8-11.3-.4s-2.8-8.3.4-11.3zM624 400a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144 52a12 12 0 1 1 0 24 12 12 0 1 1 0-24m0-140c4.4 0 8 3.6 8 8v96c0 4.4-3.6 8-8 8s-8-3.6-8-8v-96c0-4.4 3.6-8 8-8"})
  );
}

export default LanHouseCircleExclamationThin;
