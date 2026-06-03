import React from 'react';

export const LanRoadLockRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576.5 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m81.3 403.7 88.2-312c1.9-6.9 8.2-11.6 15.4-11.6h79.7v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h79.5c7.2 0 13.4 4.8 15.4 11.6l25 88.4c10.2-2.6 21-4 32-4 5.8 0 11.5.4 17 1.1l-27.8-98.6C445.9 51 420.7 32 392.1 32H184.9c-28.6 0-53.8 19-61.6 46.6l-88.2 312c-1.8 6.2-2.6 12.6-2.6 19.1 0 38.8 31.5 70.3 70.3 70.3h201.7v-80.1c0-7.9 1-15.6 2.8-23-4.4-5.4-11.1-8.9-18.7-8.9-13.3 0-24 10.7-24 24v40H102.8c-12.3 0-22.3-10-22.3-22.3 0-2 .3-4.1.8-6.1zM312.6 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24zm183.9 88.1V352h-64v-47.9c0-17.7 14.3-32 32-32s32 14.3 32 32m-144 95.9v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-20.9-13.4-38.7-32-45.3v-50.6c0-44.2-35.8-80-80-80s-80 35.8-80 80v50.6c-18.6 6.6-32 24.4-32 45.3"})
);

export default LanRoadLockRegular;
