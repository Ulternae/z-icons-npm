import React from 'react';

export const LanPenFancy = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M392.1 48.7c9.6-10.6 23.2-16.7 37.5-16.7 27.8 0 50.4 22.6 50.4 50.4 0 14.3-6.1 27.9-16.7 37.5L260.8 302.2l-51-51zM185.6 272.2l54.1 54.1-23.8 77.3c-3 9.9-10.7 17.7-20.5 20.9L67.2 467.4l67.5-67.4h1.3c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24v1.3l-67.4 67.5 42.8-128.3c3.3-9.8 11.1-17.4 20.9-20.5zM429.6 0c-23.4 0-45.6 9.9-61.3 27.3L175.1 242l-76.2 23.4c-19.8 6.1-35.4 21.3-41.9 40.9L2.9 468.6c-8.3 25 15.5 48.8 40.5 40.5L205.6 455c19.6-6.5 34.9-22.1 40.9-41.9l23.5-76.2 214.7-193.2c17.4-15.6 27.3-37.9 27.3-61.3C512 36.9 475.1 0 429.6 0"})
);

export default LanPenFancy;
