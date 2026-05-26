import React from 'react';

export const LanCompress = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v112H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16zM16 320c-8.8 0-16 7.2-16 16s7.2 16 16 16h112v112c0 8.8 7.2 16 16 16s16-7.2 16-16V336c0-8.8-7.2-16-16-16zM320 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H320zm-16 272c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V352h112c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanCompress;
