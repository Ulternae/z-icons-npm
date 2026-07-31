import React from 'react';

export const LanAmpGuitarRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M184 48h144c22.1 0 40 17.9 40 40v8H144v-8c0-22.1 17.9-40 40-40M96 88v8H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-32v-8c0-48.6-39.4-88-88-88H184c-48.6 0-88 39.4-88 88m352 56c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V160c0-8.8 7.2-16 16-16zM144 336v-32h224v32zm-48-48v64c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32m40-88a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanAmpGuitarRegular;
