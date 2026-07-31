import React from 'react';

export const LanCircleMoonThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-496a240 240 0 1 0 0 480 240 240 0 1 0 0-480m10.9 48.3c10.8.6 21.4 2.1 31.6 4.4 7.4 1.7 13 7.9 13.9 15.4s-3 14.9-9.8 18.3l-8.3 4.5c-40.9 24-68.3 68.4-68.3 119.1l.2 7.4c4.2 76.1 72.3 136.2 148.9 130.2 7.6-.6 14.7 3.6 17.8 10.6s1.5 15.1-3.9 20.4l-6.6 6c-33.8 29.5-78 47.4-126.4 47.4l-9.9-.2c-98.2-5-176.9-83.7-181.9-181.9L64 256c0-106 86-192 192-192zM256 80c-97.2 0-176 78.8-176 176s78.8 176 176 176c47.3 0 90.3-18.7 121.9-49.1l.6-1.1-.1-1.2c-.3-.8-1.2-1.3-2-1.2-88.3 7-166.3-64.6-166.3-153.5 0-60.4 34.8-112.7 85.4-137.9l.8-.8.2-1.2c-.1-1-.8-1.3-1.6-1.7-12.5-2.8-25.6-4.3-39-4.3z"})
);

export default LanCircleMoonThin;
