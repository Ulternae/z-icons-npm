import React from 'react';

export const LanArrowUpFromLineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M209 7c-9.4-9.4-24.6-9.4-33.9 0L39 143c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l95-95V360c0 13.3 10.7 24 24 24s24-10.7 24-24V81.9l95 95c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanArrowUpFromLineRegular;
