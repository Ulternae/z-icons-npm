import React from 'react';

export const LanMittenRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M142.6 0C63.8 0 0 63.8 0 142.6c0 12.2 1.1 24.9 4.3 37.7l49 195.8C40.5 384.7 32 399.4 32 416v48c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48v-48c0-17.2-9-32.3-22.6-40.8l63.5-68.8c14.9-16.1 23.1-37.3 23.1-59.2 0-48.2-39.1-87.3-87.3-87.3-20.9 0-42.1 5.6-59.6 18.5l-21.5-75.1C262.2 42.2 206.2 0 142.6 0m160.1 368h-202L50.9 168.6c-2-8.1-2.9-16.8-2.9-26.1 0-52.2 42.3-94.6 94.6-94.6 42.2 0 79.3 28 90.9 68.6L267.3 235c2.6 9 10.1 15.7 19.4 17.1s18.5-2.6 23.7-10.4l9.5-14.2c8.5-12.7 22.7-19.5 40.9-19.5 21.7 0 39.3 17.6 39.3 39.3 0 9.9-3.7 19.4-10.4 26.6l-79.2 85.8-7.6 8.3zM80 416h256v48H80z"})
);

export default LanMittenRegular;
