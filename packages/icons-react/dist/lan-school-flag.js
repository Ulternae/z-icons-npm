import React from 'react';

export const LanSchoolFlag = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M304 0v32h80V0zm-32 71.4V-8c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-88v7.4L436.8 160H512c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h75.2zM152.9 189.3c-2.6 1.8-5.7 2.7-8.9 2.7H64c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h160v-80c0-35.3 28.7-64 64-64s64 28.7 64 64v80h160c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32h-80c-3.2 0-6.2-.9-8.9-2.7L288 99.2zM144 416H96v-48h48zM96 304v-48h48v48zm384 112h-48v-48h48zm-48-112v-48h48v48zm-144-48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128m32 240c0-17.7-14.3-32-32-32s-32 14.3-32 32v80h64z"})
);

export default LanSchoolFlag;
