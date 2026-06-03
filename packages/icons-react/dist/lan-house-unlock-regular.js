import React from 'react';

export const LanHouseUnlockRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -0.05 640 544.05',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M272 6.1c9.1-8.2 22.9-8.2 32 0l193.5 173.5c-18.4 4.5-35.2 13-49.6 24.4v-4.4l-160-143.4-160 143.4v248.3c0 8.8 7.2 16 16 16h48v-104c0-39.8 32.2-72 72-72h48c35.8 0 65.5 26.1 71.1 60.3-9.5 14.9-15 32.6-15 51.6v96c0 5.5.5 10.9 1.3 16.1L144 512c-35.3 0-64-28.7-64-64V242.7l-8 7.2c-9.9 8.8-25 8-33.9-1.8s-8-25 1.8-33.9zM240 464h96V360c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24zm320-160c-.1-17.6-14.4-31.9-32-31.9-17.7 0-32 14.3-32 32V352h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48v-96c0-20.9 13.4-38.7 32-45.3v-50.6c0-44.2 35.8-80 80-80s79.9 35.8 80 79.9z"})
);

export default LanHouseUnlockRegular;
