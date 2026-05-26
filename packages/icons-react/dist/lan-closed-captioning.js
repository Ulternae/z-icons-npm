import React from 'react';

export const LanClosedCaptioning = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 96c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm88 128h32c13.3 0 24 10.7 24 24 0 8.8 7.2 16 16 16s16-7.2 16-16c0-30.9-25.1-56-56-56h-32c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56 0-8.8-7.2-16-16-16s-16 7.2-16 16c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24m152 24c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24 0 8.8 7.2 16 16 16s16-7.2 16-16c0-30.9-25.1-56-56-56h-32c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56 0-8.8-7.2-16-16-16s-16 7.2-16 16c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24z"})
);

export default LanClosedCaptioning;
