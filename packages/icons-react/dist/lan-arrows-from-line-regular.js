import React from 'react';

export const LanArrowsFromLineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M209-25c-9.4-9.4-24.6-9.4-33.9 0L103 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31V152c0 13.3 10.7 24 24 24s24-10.7 24-24V49.9l31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm7 385c0-13.3-10.7-24-24-24s-24 10.7-24 24v102.1l-31-31c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31V360zM24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanArrowsFromLineRegular;
