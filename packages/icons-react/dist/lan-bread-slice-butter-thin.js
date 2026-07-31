import React from 'react';

export const LanBreadSliceButterThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 256v176c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V256c0-8.8 7.2-16 16-16 26.5 0 48-21.5 48-48 0-46.6-27.2-82.6-71.9-107.8C379.1 58.8 318 45.7 256 45.7S132.8 58.8 87.9 84.2C43.2 109.4 16 145.4 16 192c0 26.5 21.5 48 48 48 8.8 0 16 7.2 16 16m368 0v176c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V256c-35.3 0-64-28.7-64-64 0-216.5 512-216.5 512 0 0 35.3-28.7 64-64 64m-259.7 15c-9.4 9.4-9.4 24.6 0 33.9l50.7 50.8c9.4 9.4 24.6 9.4 33.9 0l50.8-50.7c9.4-9.4 9.4-24.6 0-33.9L273 220.3c-9.4-9.4-24.6-9.4-33.9 0zm96-62.1 50.7 50.8c15.6 15.6 15.6 40.9 0 56.6L284.3 367c-15.6 15.6-40.9 15.6-56.6 0L177 316.3c-15.6-15.6-15.6-41 0-56.6l50.7-50.7c15.6-15.6 40.9-15.6 56.6 0z"})
);

export default LanBreadSliceButterThin;
