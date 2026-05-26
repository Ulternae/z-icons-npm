import React from 'react';

export const LanPersonWavingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v49.8c0 29.9-20.7 55.8-49.8 62.4l-90.6 20.6c-39.5 9-73.8 33.4-95.2 67.7l-56.8 90.8c-7 11.2-3.6 26 7.6 33.1s26 3.6 33.1-7.6L109 218c.9-1.5 1.9-3 2.9-4.5L112 520c0 13.3 10.7 24 24 24s24-10.7 24-24V368h64v152c0 13.3 10.7 24 24 24s24-10.7 24-24V149.1c47.2-14 80-57.5 80-107.3zM224 320h-64V175.9c4.6-1.8 9.3-3.2 14.2-4.3l49.8-11.3zM192 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112"})
);

export default LanPersonWavingRegular;
