import React from 'react';

export const LanHourglass2 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 512c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-41.6c0-49.4 22.8-96 61.8-126.3L166 256l-72.2-56.1c-39-30.3-61.8-77-61.8-126.3V32H16C7.2 32 0 24.8 0 16S7.2 0 16 0h352c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v41.6c0 49.4-22.8 96-61.8 126.3L218 256l72.2 56.1c39 30.3 61.8 76.9 61.8 126.3V480h16c8.8 0 16 7.2 16 16s-7.2 16-16 16zm304-32v-41.6c0-7.6-.7-15.1-2-22.4H66c-1.3 7.3-2 14.8-2 22.4V480zM113.4 337.4C97.3 349.9 84.6 366 76.1 384h231.7c-8.5-18-21.1-34.1-37.3-46.6l-78.6-61.1-78.6 61.1zM192 235.7l78.6-61.1c5.7-4.5 11-9.3 15.8-14.6H97.6c4.8 5.3 10.1 10.2 15.8 14.6zM307.9 128c7.9-16.8 12.1-35.4 12.1-54.4V32H64v41.6c0 19.1 4.2 37.6 12.1 54.4h231.7z"})
);

export default LanHourglass2;
