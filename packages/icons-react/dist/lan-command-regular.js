import React from 'react';

export const LanCommandRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 192h48v128H96c-53 0-96 43-96 96s43 96 96 96 96-43 96-96v-48h128v48c0 53 43 96 96 96s96-43 96-96-43-96-96-96h-48V192h48c53 0 96-43 96-96S469 0 416 0s-96 43-96 96v48H192V96c0-53-43-96-96-96S0 43 0 96s43 96 96 96m160 128h-64V192h128v128zM96 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48v48zm48 272c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48h48zm224-272V96c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48zm48 224c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48v-48z"})
);

export default LanCommandRegular;
