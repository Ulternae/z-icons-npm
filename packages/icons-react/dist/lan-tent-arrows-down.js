import React from 'react';

export const LanTentArrowsDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m179.3 115.3-72 72c-6.2 6.2-16.4 6.2-22.6 0l-72-72c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L80 137.4V16c0-8.8 7.2-16 16-16s16 7.2 16 16v121.4l44.7-44.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6m248 72c-6.2 6.2-16.4 6.2-22.6 0l-72-72c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l44.7 44.7V16c0-8.8 7.2-16 16-16s16 7.2 16 16v121.4l44.7-44.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zM93.6 291.8 68.5 480H240V206.4zM272 206.4v79.7l105.5 194h65.9l-25.1-188.2-146.4-85.4zm0 146.6v127h69.1zM36.8 475.8l25.1-188.3c1.3-9.8 7.1-18.4 15.6-23.4l162.4-94.7c10-5.8 22.3-5.8 32.2 0l162.4 94.7c8.5 5 14.3 13.6 15.6 23.4l25.1 188.2c2.6 19.2-12.4 36.2-31.7 36.2l-375 .1c-19.4 0-34.3-17-31.7-36.2"})
);

export default LanTentArrowsDown;
