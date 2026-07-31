import React from 'react';

export const LanBarProgressFull = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m406.6 128-256 256h146.7l182.6-182.6V160c0-17.7-14.3-32-32-32h-41.4zm-45.3 0H214.6L32 310.6V352c0 17.7 14.3 32 32 32h41.4l256-256zM32 265.4 169.4 128H64c-17.7 0-32 14.3-32 32zM342.6 384H448c17.7 0 32-14.3 32-32V246.6zM0 160c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default LanBarProgressFull;
