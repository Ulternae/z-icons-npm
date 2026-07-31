import React from 'react';

export const LanExclamation = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 64 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 464c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24M32 0c13.4 0 24.1 11 23.8 24.4l-7.8 344c-.2 8.7-7.3 15.6-16 15.6s-15.8-6.9-16-15.6l-7.8-344C7.9 11 18.6 0 32 0"})
);

export default LanExclamation;
