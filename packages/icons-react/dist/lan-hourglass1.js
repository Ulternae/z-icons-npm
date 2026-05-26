import React from 'react';

export const LanHourglass1 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 496c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-41.6c0-49.4-22.8-96-61.8-126.3L218 256l72.2-56.1c39-30.3 61.8-76.9 61.8-126.3V32h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H16C7.2 0 0 7.2 0 16s7.2 16 16 16h16v41.6c0 49.4 22.8 96 61.8 126.3L166 256l-72.2 56.1c-39 30.3-61.8 77-61.8 126.3V480H16c-8.8 0-16 7.2-16 16m64-16v-41.6c0-39.5 18.2-76.8 49.4-101l78.6-61.1 78.6 61.1c31.2 24.2 49.4 61.5 49.4 101V480zm49.4-305.4C97.3 162.1 84.6 146 76.1 128h231.7c-8.5 18-21.1 34.1-37.3 46.6l-78.6 61.1-78.6-61.1zM66 96c-1.3-7.3-2-14.8-2-22.4V32h256v41.6c0 7.6-.7 15.1-2 22.4z"})
);

export default LanHourglass1;
