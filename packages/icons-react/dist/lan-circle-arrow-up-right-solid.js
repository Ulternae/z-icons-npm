import React from 'react';

export const LanCircleArrowUpRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m216-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h112c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24v-54.1l-103 103c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l103-103z"})
);

export default LanCircleArrowUpRightSolid;
