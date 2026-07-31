import React from 'react';

export const LanHouseMedicalCircleCheckThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M298.9 7.2c-6.1-5.7-15.7-5.7-21.8 0l-234.6 219c-3.2 3-3.4 8.1-.4 11.3s8.1 3.4 11.3.4L80 213.1V456c0 30.9 25.1 56 56 56h204c-3.7-5.1-7.2-10.5-10.3-16H136c-22.1 0-40-17.9-40-40V198.1L288 18.9l202.6 189.2c1.8 0 3.6-.1 5.4-.1 6.4 0 12.8.3 19 .9zm74.6 244.9c-3.8-2.6-8.5-4.2-13.5-4.2h-32v-32c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v32h-32c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h32v32c0 13.3 10.7 24 24 24h32.7q.75-8.4 2.1-16.5c-.9.3-1.8.5-2.7.5h-32c-4.4 0-8-3.6-8-8v-40c0-4.4-3.6-8-8-8h-40c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h40c2.1 0 4.2-.8 5.7-2.3s2.3-3.5 2.3-5.7v-40c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v40c0 4.4 3.6 8 8 8h40.5c4.2-4.1 8.5-8.1 13-11.9zM496 272a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m60.7-212.5c-3.6-2.6-8.6-1.8-11.2 1.8l-74 101.7-33.4-40.1c-2.8-3.4-7.9-3.9-11.3-1s-3.9 7.9-1 11.3l40 48c1.6 1.9 3.9 3 6.4 2.9s4.8-1.3 6.2-3.3l80-110c2.6-3.6 1.8-8.6-1.8-11.2z"})
);

export default LanHouseMedicalCircleCheckThin;
