import React from 'react';

export const LanPallet = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 320c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v128H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64V352h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm448 32v128H304V352zM272 480H112V352h160z"})
);

export default LanPallet;
