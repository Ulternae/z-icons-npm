import React from 'react';

export const LanClockNineThirtyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 256a208 208 0 1 1 416 0 208 208 0 1 1-416 0m464 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M280 392V256c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h80v112c0 13.3 10.7 24 24 24s24-10.7 24-24"})
);

export default LanClockNineThirtyRegular;
