import React from 'react';

export const CorePenNibSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M307 32c25-25 65.5-25 90.5 0l82.8 82.8c25 25 25 65.5 0 90.5l-48 48v8.5c0 56-22.3 109.8-61.9 149.4-33.2 33.2-76.6 54.4-123.2 60.2L56.6 495.2l172.5-172.5c3.6.8 7.3 1.2 11.2 1.3 28.7 0 52-23.3 52-52s-23.3-52-52-52-52 23.3-52 52q0 5.7 1.2 11.1L17 455.5l23.8-190.4c5.8-46.6 27-90 60.2-123.2C140.6 102.3 194.4 80 250.4 80h8.5l48-48z"})
);

export default CorePenNibSolid;
