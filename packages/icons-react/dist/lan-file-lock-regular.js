import React from 'react';

export const LanFileLockRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 48h112v88c0 39.8 32.2 72 72 72h99.3c10.8-9.5 23.1-17.2 36.7-22.7-.3-16.5-7-32.3-18.7-44.1L274.7 18.7C262.7 6.7 246.5 0 229.5 0H96C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h209.3c-.9-5.2-1.3-10.6-1.3-16.1V464H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16m160 19.9 92.1 92.1H280c-13.3 0-24-10.7-24-24zm240 236.2V352h-64v-47.9c0-17.7 14.3-32 32-32s32 14.3 32 32M352 400v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-20.9-13.4-38.7-32-45.3v-50.6c0-44.2-35.8-80-80-80s-80 35.8-80 80v50.6c-18.6 6.6-32 24.4-32 45.3"})
);

export default LanFileLockRegular;
