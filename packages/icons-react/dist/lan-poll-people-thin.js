import React from 'react';

export const LanPollPeopleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m304-48v128H272c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32zm16 0h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64zM272 64c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zm48 240v128h-48c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32zm16 0h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H336zm-64-16c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zM48 336a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0M16 208c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v8c0 4.4 3.6 8 8 8s8-3.6 8-8zm32 224h64c17.7 0 32 14.3 32 32v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-17.7 14.3-32 32-32"})
);

export default LanPollPeopleThin;
