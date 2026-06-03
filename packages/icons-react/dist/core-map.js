import React from 'react';

export const CoreMap = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 515.2',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M576 380.2c0 22.7-12 43.6-31.4 55.1l-4 2.2-142.3 71.2-13.1 6.5-13.5-5.6-179.9-75C75.8 480.9 11.9 506.5 0 511.2V149.6c0-26.1 15.9-49.6 40.2-59.4l139.9-56 10.9-4.3 11.1 3.7 180.8 60.3C500 47.1 564.3 21.4 576 16.7zM220 377l136 56.7V152.4l-136-45.3v270zm192-225.8v278.9l100-50v-269l-100 40zm-348-1.6v267.1l100-40V109.6z"})
);

export default CoreMap;
