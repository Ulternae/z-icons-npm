import React from 'react';

export const LanBringFrontSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32h96v20.6c10.1-3 20.9-4.6 32-4.6h32V32c0-35.3-28.7-64-64-64H64C28.7-32 0-3.3 0 32v96c0 35.3 28.7 64 64 64h16v-32c0-11.1 1.6-21.9 4.6-32H64zm288 448c0 35.3 28.7 64 64 64h96c35.3 0 64-28.7 64-64v-96c0-35.3-28.7-64-64-64h-16v32c0 11.1-1.6 21.9-4.6 32H512v96h-96v-20.6c-10.1 3-20.9 4.6-32 4.6h-32zM192 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64z"})
);

export default LanBringFrontSolid;
