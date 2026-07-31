import React from 'react';

export const LanChartDiagram = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 64c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32zM32 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64s-28.7 64-64 64H272v24l6.6 6.6 42.7 42.7 6.6 6.6h56c44.2 0 80 35.8 80 80v32h16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h16v-32c0-26.5-21.5-48-48-48h-56l-56 56v24h16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h16v-24l-6.6-6.6-42.7-42.7-6.6-6.6h-56c-26.5 0-48 21.5-48 48v32h16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h16v-32c0-44.2 35.8-80 80-80h56l6.6-6.6 42.7-42.7 6.6-6.6v-24h-144c-35.3 0-64-28.7-64-64zm16 288H32v64h64v-64zm192 0h-16v64h64v-64zm192 0h-16v64h64v-64zM213.3 256l42.7 42.7 42.7-42.7-42.7-42.7z"})
);

export default LanChartDiagram;
