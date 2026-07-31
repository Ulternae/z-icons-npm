import React from 'react';

export const LanBedSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 32c17.7 0 32 14.3 32 32v224h224V160c0-17.7 14.3-32 32-32h160c53 0 96 43 96 96v224c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64H64v64c0 17.7-14.3 32-32 32S0 465.7 0 448V64c0-17.7 14.3-32 32-32m80 160a64 64 0 1 1 128 0 64 64 0 1 1-128 0"})
);

export default LanBedSolid;
