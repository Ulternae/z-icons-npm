import React from 'react';

export const LanToggleOnSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 64C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192"})
);

export default LanToggleOnSolid;
