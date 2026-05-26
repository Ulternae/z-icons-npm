import React from 'react';

export const LanBarProgressHalf = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 128c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H272V128zm-241.4 0H240v81.4L65.4 384H64c-17.7 0-32-14.3-32-32v-49.4zm-45.3 0L32 257.4V160c0-17.7 14.3-32 32-32h97.4zm-50.7 256L240 254.6V384zM64 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64z"})
);

export default LanBarProgressHalf;
