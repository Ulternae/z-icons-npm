import React from 'react';

export const LanERegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M24 32C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24H48V272h184c13.3 0 24-10.7 24-24s-10.7-24-24-24H48V80h248c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanERegular;
