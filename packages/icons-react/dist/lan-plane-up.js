import React from 'react';

export const LanPlaneUp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 32c0-35.3 28.7-64 64-64s64 28.7 64 64v105l186.8 171.2c3.3 3 5.2 7.3 5.2 11.8v80c0 5.1-2.5 10-6.6 13s-9.5 3.8-14.4 2.2l-170.9-57v58.1l74 59.2c3.8 3 6 7.6 6 12.5v48c0 4.9-2.3 9.6-6.2 12.6s-8.9 4.1-13.7 2.9l-124.1-31-124.1 31c-4.8 1.2-9.8.1-13.7-2.9s-6.3-7.7-6.3-12.6v-48c0-4.9 2.2-9.5 6-12.5l74-59.2v-58.1l-170.9 57c-4.9 1.6-10.2.8-14.4-2.2S0 405.1 0 400v-80c0-4.5 1.9-8.8 5.2-11.8L192 137zm64-32c-17.7 0-32 14.3-32 32v392c0 4.9-2.2 9.5-6 12.5l-74 59.2v19.8l108.1-27c2.5-.6 5.2-.6 7.8 0l108.1 27v-19.8l-74-59.2c-3.8-3-6-7.6-6-12.5V32c0-17.7-14.3-32-32-32m64 180.4v144.1l160 53.3V327L320 180.3zM32 327v50.8l160-53.3V180.4L32 327.1z"})
);

export default LanPlaneUp;
