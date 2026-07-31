import React from 'react';

export const LanTrafficConeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M364.8 320H147.1l38.5-96h140.7zm19.2 48 38.5 96H89.3l38.5-96zM256 48.6 307.1 176H204.9zM474.3 464 300.2 29.9C293 11.8 275.5 0 256 0s-37 11.8-44.2 29.9L37.7 464H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanTrafficConeRegular;
