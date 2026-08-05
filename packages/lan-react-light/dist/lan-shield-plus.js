import React from 'react';

export function LanShieldPlus({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M243.6 37.3c8-3.4 17-3.4 25 0l176.7 75c11.3 4.8 18.9 15.5 18.8 27.6-.5 94-39.4 259.8-195.5 334.5-7.9 3.8-17.2 3.8-25.1 0C87.4 399.7 48.5 234 48.1 139.9c-.1-12.1 7.5-22.8 18.8-27.6zm37.5-29.5c-16-6.8-34-6.8-50 0l-176.8 75c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.8 420.7 495.6 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2zM240 312c0 8.8 7.2 16 16 16s16-7.2 16-16v-56h56c8.8 0 16-7.2 16-16s-7.2-16-16-16h-56v-56c0-8.8-7.2-16-16-16s-16 7.2-16 16v56h-56c-8.8 0-16 7.2-16 16s7.2 16 16 16h56z"})
  );
}

export default LanShieldPlus;
