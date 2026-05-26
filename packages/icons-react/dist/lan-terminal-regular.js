import React from 'react';

export const LanTerminalRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M7 105c-9.3-9.4-9.3-24.6 0-34s24.6-9.3 34 0l168 168c9.4 9.4 9.4 24.6 0 33.9L41 441c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6-.1-34l151.1-151zm481 295c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
);

export default LanTerminalRegular;
