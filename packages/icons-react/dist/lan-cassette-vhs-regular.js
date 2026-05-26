import React from 'react';

export const LanCassetteVhsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 160v224c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V160zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm120 192v48h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24zm48 0h48v48h-48zm96 48v-48h16c13.3 0 24 10.7 24 24s-10.7 24-24 24zm-160-96c-39.8 0-72 32.2-72 72s32.2 72 72 72h176c39.8 0 72-32.2 72-72s-32.2-72-72-72z"})
);

export default LanCassetteVhsRegular;
