import React from 'react';

export const LanMobileButton = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM0 64C0 28.7 28.7 0 64 0h192c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 376c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24"})
);

export default LanMobileButton;
