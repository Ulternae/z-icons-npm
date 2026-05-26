import React from 'react';

export const LanChfSignSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 145.4C0 100.4 36.5 64 81.4 64c30.8 0 59 17.4 72.8 45l2.3 4.7c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3l-2.3-4.7c-3-5.9-9-9.6-15.6-9.6-9.6 0-17.4 7.8-17.4 17.4v221.1c0 9.6 7.8 17.4 17.4 17.4 6.6 0 12.6-3.7 15.6-9.6l2.3-4.7c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-2.3 4.7c-13.8 27.6-42 45-72.8 45-45 0-81.4-36.5-81.4-81.4zM224 64c17.7 0 32 14.3 32 32v128h96V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V288h-96v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32m224 32c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96v96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64v128c0 17.7-14.3 32-32 32s-32-14.3-32-32z"})
);

export default LanChfSignSolid;
