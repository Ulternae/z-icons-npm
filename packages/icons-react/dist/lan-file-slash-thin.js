import React from 'react';

export const LanFileSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M13.7-29.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l560 560c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L480 436.5V186.4c0-17-6.7-33.3-18.7-45.3L338.7 18.7C326.7 6.7 310.5 0 293.5 0H160c-31.8 0-58.1 23.1-63.1 53.5zM112 68.6V64c0-26.5 21.5-48 48-48h133.5q5.4 0 10.5 1.2V120c0 30.9 25.1 56 56 56h102.8q1.2 5.1 1.2 10.5v234.1zm0 379.4V159.2l-16-16V448c0 35.3 28.7 64 64 64h256c13.8 0 26.6-4.4 37-11.8l-11.5-11.5c-7.4 4.6-16.1 7.3-25.5 7.3H160c-26.5 0-48-21.5-48-48m344-288h-96c-22.1 0-40-17.9-40-40V24c2.7 1.8 5.1 3.8 7.4 6.1l122.5 122.5c2.3 2.3 4.3 4.8 6.1 7.4"})
);

export default LanFileSlashThin;
