import React from 'react';

export const LanMicrophoneThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 16c44.2 0 80 35.8 80 80v128c0 44.2-35.8 80-80 80s-80-35.8-80-80V96c0-44.2 35.8-80 80-80M96 96v128c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96S96 43 96 96m-80 72c0-4.4-3.6-8-8-8s-8 3.6-8 8v56c0 103.4 81.7 187.6 184 191.8V496h-72c-4.4 0-8 3.6-8 8s3.6 8 8 8h160c4.4 0 8-3.6 8-8s-3.6-8-8-8h-72v-80.2c102.3-4.2 184-88.5 184-191.8v-56c0-4.4-3.6-8-8-8s-8 3.6-8 8v56c0 97.2-78.8 176-176 176S16 321.2 16 224z"})
);

export default LanMicrophoneThin;
