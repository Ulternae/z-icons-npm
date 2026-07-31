import React from 'react';

export const LanArrowUp19Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M424.5 56c0-7.5-3.5-14.6-9.5-19.2s-13.8-6-21-3.9l-56 16c-12.7 3.6-20.1 16.9-16.5 29.7s16.9 20.1 29.7 16.5l25.4-7.3V176h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32V56zm-56 280a32 32 0 1 1 64 0 32 32 0 1 1-64 0m4.6 105.9c-7.8 10.7-5.4 25.7 5.3 33.5s25.7 5.4 33.5-5.3l45.2-62.1a122.4 122.4 0 0 0 23.4-72c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 41.4 31.4 75.4 71.7 79.6zM145.5 39c-9.4-9.4-24.6-9.4-33.9 0L7.5 143c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l63-63V456c0 13.3 10.7 24 24 24s24-10.7 24-24V113.9l63 63c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"})
);

export default LanArrowUp19Regular;
