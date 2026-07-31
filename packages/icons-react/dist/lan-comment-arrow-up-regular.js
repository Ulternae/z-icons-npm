import React from 'react';

export const LanCommentArrowUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 240c0 54.4 19.3 104.6 51.9 144.9L3.1 474.3c-2 3.7-3.1 7.9-3.1 12.2C0 500.6 11.4 512 25.5 512c4 0 7.8-.6 11.5-2.1L153.4 460c31.4 12.9 66.1 20 102.6 20 141.4 0 256-107.5 256-240S397.4 0 256 0 0 107.5 0 240m94 167.9c9.3-17.1 7.4-38.1-4.8-53.2C63.1 322.4 48 282.8 48 240c0-103.2 90.2-192 208-192s208 88.8 208 192-90.2 192-208 192c-30.2 0-58.7-5.9-84.3-16.4-11.9-4.9-25.3-4.8-37.1.3l-58.6 25zM273 143c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31V320c0 13.3 10.7 24 24 24s24-10.7 24-24V217.9l31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72z"})
);

export default LanCommentArrowUpRegular;
