import React from 'react';

export const LanImagePolaroidUser = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M336 384H32v32c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-32zm-1.6-32H416V96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v256h81.6c7.4-36.5 39.7-64 78.4-64h64c38.7 0 71 27.5 78.4 64m-187.7 0h154.5c-6.6-18.6-24.4-32-45.3-32h-64c-20.9 0-38.7 13.4-45.3 32zM448 96v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64m-192 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"})
);

export default LanImagePolaroidUser;
