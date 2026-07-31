import React from 'react';

export const LanRibbonThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M227.9 16h-71.8c-24.7 0-47.7 12.7-60.9 33.6l-8.1 12.8 26.5 33.7h156.7l26.5-33.7-8.1-12.8C275.6 28.7 252.6 16 227.9 16m-101.6 96 65.7 83.5 65.7-83.5H126.2zm137.5 174.7 65-87.4c17.8-23.9 19-56.3 3.1-81.4l-26-41.2-103.7 131.8zm77.9-77.8L274 299.7l100.3 127.4c1.3 1.7 1.9 3.8 1.6 6s-1.4 4.1-3.1 5.4l-96 72c-1.7 1.3-3.8 1.8-5.9 1.5s-4-1.4-5.3-3.1L42.4 208.8c-21.7-29.2-23.2-68.8-3.8-99.5L81.7 41c16.1-25.5 44.2-41 74.4-41h71.8c30.2 0 58.3 15.5 74.4 41l43.1 68.3c19.4 30.8 17.9 70.3-3.8 99.5zM9.7 427.1l69.5-88.3 9.9 13.3-61.8 78.5 83 62.3 41.7-56.1 10 13.4-43.7 58.7c-1.3 1.7-3.2 2.8-5.3 3.1s-4.2-.2-5.9-1.5l-96-72c-1.7-1.3-2.9-3.2-3.1-5.4s.3-4.3 1.6-6zM78.1 76.7l-26 41.2c-15.9 25.2-14.7 57.5 3.1 81.4l218.4 293.5 83-62.3L78 76.7z"})
);

export default LanRibbonThin;
