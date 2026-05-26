import React from 'react';

export const LanObjectsAlignBottomSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 512h448c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32m32-176c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48h-64C85.5 0 64 21.5 64 48zm224 0c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48z"})
);

export default LanObjectsAlignBottomSolid;
