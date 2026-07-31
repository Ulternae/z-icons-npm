import React from 'react';

export const LanDresser = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M336 0c26.5 0 48 21.5 48 48v448c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H32v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V48C0 21.5 21.5 0 48 0zM32 320v128h320V320zm192 32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16zM32 288h320V160H32zm192-96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16zM48 32c-8.8 0-16 7.2-16 16v80h320V48c0-8.8-7.2-16-16-16z"})
);

export default LanDresser;
