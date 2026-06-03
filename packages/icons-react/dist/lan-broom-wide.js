import React from 'react';

export const LanBroomWide = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 575.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M571.3-4.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-208 208-18.6-18.6c-20.2-20.2-51.4-24.6-76.3-10.7L16.4 278.9C6.3 284.5 0 295.2 0 306.8c0 8.4 3.4 16.6 9.3 22.5l205.4 205.4c6 6 14.1 9.3 22.6 9.3 11.6 0 22.3-6.3 27.9-16.4l127.4-229.4c13.9-25 9.5-56.1-10.7-76.3l-18.6-18.6zM299.5 184.8l59.7 59.7c10.1 10.1 12.3 25.7 5.3 38.2l-21.2 38.1-120.2-120.2 38.1-21.2c12.5-6.9 28.1-4.8 38.2 5.3zm-105.4 32 133.1 133.1-90 162.1-123.3-123.3 41.4-41.4c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-41.4 41.4L32 306.8z"})
);

export default LanBroomWide;
