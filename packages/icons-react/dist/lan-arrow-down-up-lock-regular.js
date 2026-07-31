import React from 'react';

export const LanArrowDownUpLockRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -0.05 576 544.05',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M457 95 369 7c-9.4-9.4-24.6-9.4-33.9 0L247 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47V232h-272c-13.3 0-24 10.7-24 24s10.7 24 24 24h80v150.1l-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l88 88c9.4 9.4 24.6 9.4 33.9 0l88-88c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47V280h154.2c5.1-26.9 18.6-50.9 37.8-69V81.9l47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zM184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v160h48zm312 280.1V352h-64v-47.9c0-17.7 14.3-32 32-32s32 14.3 32 32M352 400v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-20.9-13.4-38.7-32-45.3v-50.6c0-44.2-35.8-80-80-80s-80 35.8-80 80v50.6c-18.6 6.6-32 24.4-32 45.3"})
);

export default LanArrowDownUpLockRegular;
