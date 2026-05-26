import React from 'react';

export const LanBicepThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M232.1 0c30.9 0 56 25.1 56 56v32c0 48.6-39.4 88-88 88h-32l9.2 101.1c44.2-33.3 99.2-53.1 158.8-53.1 66.3 0 127 24.5 173.3 64.9 3.3 2.9 3.7 8 .8 11.3s-8 3.7-11.3.8c-43.6-38-100.5-60.9-162.8-60.9-59.6 0-114.3 21-157.1 56.1l5 55.2c.4 4.4-2.9 8.3-7.2 8.7s-8.3-2.9-8.7-7.2l-20.8-229.3c-2.1-23.4 16.3-43.6 39.8-43.6h13c4.4 0 8 3.6 8 8s-3.6 8-8 8h-13c-14.1 0-25.2 12.1-23.9 26.2l3.4 37.8H200c39.8 0 72-32.2 72-72V56c0-22.1-17.9-40-40-40H117.9c-32.8 0-61.1 22.1-67.5 53.8C36.3 139.3 16.1 260 16.1 384c0 61.8 50 111.8 111.8 112l375.5-32c4.4-.4 8.3 2.9 8.7 7.3s-2.9 8.3-7.3 8.7l-376 32h-.6C57.4 512 .1 454.7.1 384c0-125.5 20.3-247.4 34.6-317.4C42.7 27 77.9 0 117.9 0z"})
);

export default LanBicepThin;
