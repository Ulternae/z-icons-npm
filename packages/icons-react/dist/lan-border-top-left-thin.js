import React from 'react';

export const LanBorderTopLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 456c0 4.4 3.6 8 8 8s8-3.6 8-8V96c0-26.5 21.5-48 48-48h360c4.4 0 8-3.6 8-8s-3.6-8-8-8H64C28.7 32 0 60.7 0 96zm128-24a16 16 0 1 0 0 32 16 16 0 1 0 0-32m192 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32m-96 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32m192-32a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-160a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-160a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
);

export default LanBorderTopLeftThin;
