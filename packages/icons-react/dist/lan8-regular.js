import React from 'react';

export const Lan8Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304 156c0-68.5-55.5-124-124-124h-40C71.5 32 16 87.5 16 156c0 37.7 16.8 71.4 43.3 94.2C23.7 272 0 311.2 0 356c0 68.5 55.5 124 124 124h72c68.5 0 124-55.5 124-124 0-44.8-23.7-84-59.3-105.8 26.5-22.7 43.3-56.5 43.3-94.2M180.1 280H196c42 0 76 34 76 76s-34 76-76 76h-72c-42 0-76-34-76-76s34-76 76-76zm0-48H140c-42 0-76-34-76-76s34-76 76-76h40c42 0 76 34 76 76s-34 76-76 76z"})
);

export default Lan8Regular;
