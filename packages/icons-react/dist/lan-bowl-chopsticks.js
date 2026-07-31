import React from 'react';

export const LanBowlChopsticks = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m499.1 31.7-480 96C10.5 129.4 2 123.8.3 115.1S4.2 98 12.9 96.3l480-96c8.7-1.7 17.1 3.9 18.8 12.6s-3.9 17.1-12.6 18.8M512 142.9c.6 8.8-6.1 16.4-14.9 17l-480 32c-8.8.6-16.4-6.1-17-14.9s6.1-16.4 14.9-17l480-32c8.8-.6 16.4 6.1 17 14.9M144.8 445.5c7.7 3.7 13.7 10.3 16.5 18.4 3.3 9.4 12.2 16.1 22.7 16.1h144c10.4 0 19.4-6.7 22.7-16.1 2.8-8.1 8.7-14.7 16.5-18.4 61.4-29.2 105-90.1 109.3-162.2l.6-10.3c.5-9.2-6.8-16.9-16-16.9L50.9 256c-9.2 0-16.5 7.8-16 16.9l.6 10.3c4.2 72.1 47.8 133 109.3 162.2zM3 274.8C1.4 247.2 23.3 224 50.9 224h410.2c27.6 0 49.5 23.2 47.9 50.8l-.6 10.3c-5 84.1-55.9 155.1-127.5 189.2-7.6 21.9-28.4 37.6-52.9 37.6H184c-24.5 0-45.3-15.7-52.9-37.6C59.5 440.2 8.6 369.2 3.6 285.1z"})
);

export default LanBowlChopsticks;
