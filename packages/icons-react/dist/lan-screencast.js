import React from 'react';

export const LanScreencast = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 64H64c-17.7 0-32 14.3-32 32v80.1c-2.2-.1-4.4-.1-6.7-.1H0V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H304v-25.3c0-2.2 0-4.5-.1-6.7H448c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32M16 224c132.5 0 240 107.5 240 240 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-114.9-93.1-208-208-208-8.8 0-16-7.2-16-16s7.2-16 16-16m16 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64M0 336c0-8.8 7.2-16 16-16 79.5 0 144 64.5 144 144 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9-50.1-112-112-112-8.8 0-16-7.2-16-16"})
);

export default LanScreencast;
