import React from 'react';

export const LanCupStrawSwooshThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M193.9 13.7C198.6-3.8 214.5-16 232.6-16H280c4.4 0 8 3.6 8 8s-3.6 8-8 8h-47.4c-10.9 0-20.4 7.3-23.2 17.8L188.5 96H376c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24l-28.5 355.8c-2 24.9-22.8 44.2-47.8 44.2H108.3c-25 0-45.9-19.2-47.8-44.2L32 112H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h164zm142 98.3H48.1l18.5 231.9c41.5-2 68.3-10.1 87.6-20.9 19.7-11 32.2-25.2 44.6-40.2l2.9-3.5c11.4-13.9 23.4-28.5 41.3-40.1 19.6-12.7 45.5-21.4 84.6-23.2zm-9.6 120.1c-35.7 1.9-58.2 9.9-74.6 20.5-15.7 10.2-26.2 23-37.9 37.1l-2.7 3.3c-12.6 15.3-26.6 31.4-49.1 44-21.9 12.2-51.2 20.8-94.1 22.9l8.5 106.7c1.3 16.6 15.2 29.4 31.9 29.4h167.4c16.7 0 30.6-12.8 31.9-29.4l18.8-234.5z"})
);

export default LanCupStrawSwooshThin;
