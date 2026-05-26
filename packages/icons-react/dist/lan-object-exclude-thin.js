import React from 'react';

export const LanObjectExcludeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 16h224c26.5 0 48 21.5 48 48v48h16V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h48v-16H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48m160 144c-35.3 0-64 28.7-64 64h16c0-26.5 21.5-48 48-48h32v-16zm-64 112v80h48v-16h-32v-64zm96 80h32c35.3 0 64-28.7 64-64h-16c0 26.5-21.5 48-48 48h-32zm96-176v-16h-48v16h32v64h16zM160 400v48c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-48v16h48c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H224c-26.5 0-48-21.5-48-48v-48z"})
);

export default LanObjectExcludeThin;
