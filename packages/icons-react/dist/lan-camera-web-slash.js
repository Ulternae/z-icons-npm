import React from 'react';

export const LanCameraWebSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.85 576 575.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L441.6 387.1C484.9 346.2 512 288.3 512 224 512 100.3 411.7 0 288 0c-64.3 0-122.2 27.1-163.1 70.4zM147.6 93.1c35-37.6 85-61.1 140.4-61.1 106 0 192 86 192 192 0 55.4-23.5 105.4-61 140.4l-45.3-45.3c26-23.4 42.3-57.4 42.3-95.1 0-70.7-57.3-128-128-128-37.8 0-71.7 16.3-95.1 42.3zM351 296.5 215.5 161c17.6-20.2 43.5-33 72.5-33 53 0 96 43 96 96 0 28.9-12.8 54.9-33 72.5M80.6 139.1C69.9 165.3 64 194 64 224c0 118.3 91.8 215.2 208 223.4V480h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80v-32.6c24.2-1.7 47.4-7.3 68.9-16.1L348 406.4c-18.9 6.2-39 9.5-59.9 9.5-106 0-192-86-192-192 0-20.9 3.4-41.1 9.5-59.9z"})
);

export default LanCameraWebSlash;
