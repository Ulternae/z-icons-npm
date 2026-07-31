import React from 'react';

export const LanHeptagonThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -35.037 576 547.137',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M267.4-31.5c15.9-5.5 33.5-4.6 48.8 2.8l172.4 83 6.3 3.5c14.2 9 24.5 23.3 28.3 39.9l42.6 186.5 1.2 7.2c1.6 14.3-1.7 28.8-9.4 41.1l-4.2 5.9L434.1 488l-4.8 5.4c-10.2 10.2-23.6 16.6-38 18.3l-7.3.4H192.7l-7.2-.4c-14.3-1.6-27.7-8.1-38-18.3l-4.8-5.4L23.4 338.4c-10.6-13.3-15.4-30.3-13.5-47l1.2-7.2L53.7 97.7l2-7c4.9-13.9 14.4-25.7 27-33.4l5.6-3 172.4-83zm41.9 17.2c-11.5-5.5-24.6-6.2-36.6-2.1l-5.1 2.1-172.4 83c-11.3 5.5-20 15.2-24.3 26.9l-1.8 6-42.5 186.2c-3.1 14.2.3 29.2 9.4 40.6L155.3 478l3.6 4.1c8.9 8.9 21.1 14 33.9 14h191.3c14.6 0 28.4-6.7 37.5-18.1l119-149.2 3.6-5c5.6-9.1 8.1-19.7 6.9-30.3l-.9-5.6-42.6-186.5c-2.8-12.3-10.4-23-20.9-29.8l-5.4-3-172-82.8z"})
);

export default LanHeptagonThin;
