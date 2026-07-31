import React from 'react';

export const LanRectangleAd = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 96v32h80v-32c0-17.7-14.3-32-32-32h-16c-17.7 0-32 14.3-32 32m80 112v-48h-80v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V224c0-35.3 28.7-64 64-64h16c35.3 0 64 28.7 64 64v112c0 8.8-7.2 16-16 16s-16-7.2-16-16m208-160v160c0 8.8-7.2 16-16 16-7.6 0-14-5.3-15.6-12.4C372.9 347.4 359 352 344 352c-39.8 0-72-32.2-72-72s32.2-72 72-72c14.8 0 28.6 4.5 40 12.1V176c0-8.8 7.2-16 16-16s16 7.2 16 16m-72 64a40 40 0 1 0 0 80 40 40 0 1 0 0-80"})
);

export default LanRectangleAd;
