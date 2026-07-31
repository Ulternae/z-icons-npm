import React from 'react';

export const LanMugSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 64c-17.7 0-32 14.3-32 32v256c0 53 43 96 96 96h192c53 0 96-43 96-96v-32c70.7 0 128-57.3 128-128S518.7 64 448 64zm352 64c35.3 0 64 28.7 64 64s-28.7 64-64 64z"})
);

export default LanMugSolid;
