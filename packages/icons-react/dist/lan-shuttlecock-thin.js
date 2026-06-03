import React from 'react';

export const LanShuttlecockThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -15.7 576 527.7',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M274.9-15.5c10.2 0 20 4 27.2 11.2L374 67.6l58.5 11.7c16.2 3.2 28.9 15.9 32.2 32.2l11.7 58.5 71.9 71.9 2.6 2.8c5.6 6.8 8.7 15.4 8.7 24.3 0 15.6-9.4 29.6-23.8 35.6l-220.5 90.7-81.2 72.7c-44.3 39.6-111.8 37.7-153.7-4.3-42-42-43.9-109.5-4.3-153.8l72.6-81.3L239.4 8.2 242 3c6.9-11.5 19.3-18.7 33-18.7zM88 320.6c-33.9 37.9-32.3 95.8 3.7 131.8s93.8 37.6 131.8 3.7l15.5-13.8-137.1-137.1-13.8 15.5zm24.5-27.4 138.4 138.4 47.2-42.2L154.7 246zM277 345.7l34.1 34.1 218.5-89.9c8.4-3.5 13.9-11.7 13.9-20.7 0-4.5-1.3-8.8-3.8-12.4l-2.8-3.4-68.4-68.4-191.6 160.8zm-67.3-67.3 56 56L460.3 171 449 114.7c-2-9.9-9.7-17.6-19.6-19.6l-56.3-11.4-163.4 194.6zM274.9.5c-8 0-15.2 4.2-19.2 10.9l-1.5 3-90 218.5 34.1 34.1L359.2 75.5 290.8 7.1c-4.2-4.2-9.9-6.6-15.9-6.6"})
);

export default LanShuttlecockThin;
