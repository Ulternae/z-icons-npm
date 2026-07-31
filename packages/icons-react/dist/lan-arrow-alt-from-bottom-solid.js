import React from 'react';

export const LanArrowAltFromBottomSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M175 7c9.4-9.4 24.6-9.4 33.9 0L353 151c6.9 6.9 8.9 17.2 5.2 26.2S345.7 192 336 192h-80v144c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V192H48c-9.7 0-18.5-5.8-22.2-14.8S24.2 157.9 31 151zM0 480c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"})
);

export default LanArrowAltFromBottomSolid;
