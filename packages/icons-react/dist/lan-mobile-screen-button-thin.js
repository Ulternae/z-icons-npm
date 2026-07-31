import React from 'react';

export const LanMobileScreenButtonThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16c26.5 0 48 21.5 48 48v288H16V64c0-26.5 21.5-48 48-48zm48 352v80c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48v-80zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm96 416c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16m-32 16c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32"})
);

export default LanMobileScreenButtonThin;
