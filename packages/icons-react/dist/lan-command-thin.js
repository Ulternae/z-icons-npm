import React from 'react';

export const LanCommandThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 192h80v128H96c-53 0-96 43-96 96s43 96 96 96 96-43 96-96v-80h128v80c0 53 43 96 96 96s96-43 96-96-43-96-96-96h-80V192h80c53 0 96-43 96-96S469 0 416 0s-96 43-96 96v80H192V96c0-53-43-96-96-96S0 43 0 96s43 96 96 96m160 128h-64V192h128v128zM96 176c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80v80zm80 240c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80h80zm160-240V96c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80zm80 160c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80v-80z"})
);

export default LanCommandThin;
