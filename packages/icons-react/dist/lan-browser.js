import React from 'react';

export const LanBrowser = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 96v64h320v-32c0-17.7-14.3-32-32-32zm-32 0H64c-17.7 0-32 14.3-32 32v32h96zm-96 96v192c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V192zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default LanBrowser;
