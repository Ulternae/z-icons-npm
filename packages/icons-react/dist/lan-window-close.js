import React from 'react';

export const LanWindowClose = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm164.7 36.7c6.2-6.2 16.4-6.2 22.6 0l68.7 68.7 68.7-68.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L278.6 256l68.7 68.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L256 278.6l-68.7 68.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l68.7-68.7-68.7-68.7c-6.2-6.2-6.2-16.4 0-22.6"})
);

export default LanWindowClose;
