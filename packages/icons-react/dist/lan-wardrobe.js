import React from 'react';

export const LanWardrobe = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 0c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v464c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H64v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V32H16C7.2 32 0 24.8 0 16S7.2 0 16 0zM64 448h176V32H64zm208 0h176V32H272zm-96-256c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m160 0c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"})
);

export default LanWardrobe;
