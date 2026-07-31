import React from 'react';

export const LanSitemapThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 48c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zm-64-16c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h24v80H112c-30.9 0-56 25.1-56 56v56H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H72v-56c0-22.1 17.9-40 40-40h136v96h-24c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-24v-96h136c22.1 0 40 17.9 40 40v56h-24c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-24v-56c0-30.9-25.1-56-56-56H264v-80h24c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM32 368h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m192 0h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m192 0h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"})
);

export default LanSitemapThin;
