import React from 'react';

export const LanBinarySlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M7-24.9c9.4-9.4 24.6-9.4 33.9 0l61.3 61.3C112.6 14.9 134.5 0 160 0h64c35.3 0 64 28.7 64 64v96c0 17.2-6.8 32.8-17.8 44.3l83.7 83.7h62.2c35.3 0 64 28.7 64 64v62.2l89 89c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 9.1c-9.3-9.4-9.3-24.6 0-34m229.2 195.3c2.4-2.8 3.8-6.4 3.8-10.4V64c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v14.2zm158 293.6 44 44c-6.9 2.6-14.4 4-22.2 4h-64c-35.3 0-64-28.7-64-64v-90.2l48 48V448c0 8.8 7.2 16 16 16zM424 24v152h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V57.3l-16.4 5.5c-12.6 4.2-26.2-2.6-30.4-15.2s2.6-26.2 15.2-30.4l48-16c7.3-2.4 15.4-1.2 21.6 3.3s10 11.8 10 19.5M200 312v152h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V345.3l-16.4 5.5c-12.6 4.2-26.2-2.6-30.4-15.2s2.6-26.2 15.2-30.4l48-16c7.3-2.4 15.4-1.2 21.6 3.3s10 11.8 10 19.5"})
);

export default LanBinarySlashRegular;
