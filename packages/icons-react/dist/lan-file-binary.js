import React from 'react';

export const LanFileBinary = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32h128v96c0 35.3 28.7 64 64 64h96v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32m160 13.3L338.7 160H256c-17.7 0-32-14.3-32-32zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm64 256c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h16c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zm-16 48c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16zm120-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h8v96h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8V272c0-8.8-7.2-16-16-16z"})
);

export default LanFileBinary;
