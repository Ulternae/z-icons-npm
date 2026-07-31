import React from 'react';

export const LanSitemap = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 64v64h-64V64zm-64 96h16v64H112c-35.3 0-64 28.7-64 64v64H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H80v-64c0-17.7 14.3-32 32-32h128v96h-16c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-16v-96h128c17.7 0 32 14.3 32 32v64h-16c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-16v-64c0-35.3-28.7-64-64-64H272v-64h16c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32M32 384h64v64H32zm192 0h64v64h-64zm192 0h64v64h-64z"})
);

export default LanSitemap;
