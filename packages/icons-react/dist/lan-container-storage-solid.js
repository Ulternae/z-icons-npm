import React from 'react';

export const LanContainerStorageSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 56c0-13.3 10.7-24 24-24h528c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v352h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V80h-8C10.7 80 0 69.3 0 56m120 96v208c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24s-24 10.7-24 24m216-24c-13.3 0-24 10.7-24 24v208c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24m72 24v208c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24s-24 10.7-24 24m-168-24c-13.3 0-24 10.7-24 24v208c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24"})
);

export default LanContainerStorageSolid;
