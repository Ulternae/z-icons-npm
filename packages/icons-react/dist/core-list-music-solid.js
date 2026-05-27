import React from 'react';

export const CoreListMusicSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 0c-35.3 0-64 28.7-64 64v261.5c-10-3.5-20.8-5.5-32-5.5-53 0-96 43-96 96s43 96 96 96 96-43 96-96V192h96c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm448 128V64H416v64zm-32 320h32v-64H288v64zm32-160v-64H416v64z"})
);

export default CoreListMusicSolid;
