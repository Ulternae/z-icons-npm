import React from 'react';

export const LanCommand = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 192h64v128H96c-53 0-96 43-96 96s43 96 96 96 96-43 96-96v-64h128v64c0 53 43 96 96 96s96-43 96-96-43-96-96-96h-64V192h64c53 0 96-43 96-96S469 0 416 0s-96 43-96 96v64H192V96c0-53-43-96-96-96S0 43 0 96s43 96 96 96m160 128h-64V192h128v128zM96 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64v64zm64 256c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64h64zm192-256V96c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64zm64 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64v-64z"})
);

export default LanCommand;
