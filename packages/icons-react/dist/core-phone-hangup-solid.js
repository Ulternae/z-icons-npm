import React from 'react';

export const CorePhoneHangupSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 320v-64l-28-14c-42.8-21.4-93.2-21.4-136 0l-28 14v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-36.3c0-66.9 34.8-129 91.9-163.8l12.6-7.7c112.7-68.9 254.4-68.9 367.1 0l12.6 7.7c57.1 34.9 91.9 96.9 91.9 163.8V320c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64z"})
);

export default CorePhoneHangupSolid;
