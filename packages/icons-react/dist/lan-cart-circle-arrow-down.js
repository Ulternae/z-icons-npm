import React from 'react';

export const LanCartCircleArrowDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16h45.3C69 32 75.7 37.5 77 45.1l50.9 279.7c6.2 34.2 36 59.1 70.8 59.1h105.9c.9-11 2.7-21.6 5.4-32H198.7c-19.3 0-35.9-13.8-39.4-32.8l-5.6-31.1H340c8.4-11.7 18.2-22.5 29-32H147.9L113 64h417.3c5.1 0 8.9 4.7 7.8 9.7l-28.8 134.8c10.8.7 21.4 2.4 31.7 4.8l28.4-132.9c5.4-24.9-13.6-48.4-39.1-48.4H106.6C99.9 13.1 81.9 0 61.3 0zm172 460a20 20 0 1 1 40 0 20 20 0 1 1-40 0m72 0a52 52 0 1 0-104 0 52 52 0 1 0 104 0m348-60a112 112 0 1 1-224 0 112 112 0 1 1 224 0m-256 0a144 144 0 1 0 288 0 144 144 0 1 0-288 0m188.7-3.3L512 425.4V336c0-8.8-7.2-16-16-16s-16 7.2-16 16v89.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l56 56c6.2 6.2 16.4 6.2 22.6 0l56-56c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0"})
);

export default LanCartCircleArrowDown;
