import React from 'react';

export const LanPlugCircleBolt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 640 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M176-32c8.8 0 16 7.2 16 16V96h192V-16c0-8.8 7.2-16 16-16s16 7.2 16 16V96h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v80.7c-11 .9-21.6 2.7-32 5.4v-86H128v96c0 88.4 71.6 160 160 160 5.6 0 11.2-.3 16.7-.9-1 11.3-.9 22.4-.1 32.2l-.6.1v80.7c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80.7C173.4 407.2 96 324.6 96 224v-96H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V-16c0-8.8 7.2-16 16-16m320 544a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m32.6 68.7c6.2 6.2 6.2 16.4 0 22.6L492 384h46.7c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-64 64c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l36.7-36.7h-46.7c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l64-64c6.2-6.2 16.4-6.2 22.6 0z"})
);

export default LanPlugCircleBolt;
