import React from 'react';

export function LanVials({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16h16v384c0 53 43 96 96 96s96-43 96-96V32h64v384c0 53 43 96 96 96s96-43 96-96V32h16c8.8 0 16-7.2 16-16s-7.2-16-16-16zm176 32v160H64V32zM64 416V224h128v192c0 35.3-28.7 64-64 64s-64-28.7-64-64M448 32v160H320V32zM320 416V224h128v192c0 35.3-28.7 64-64 64s-64-28.7-64-64"})
  );
}

export default LanVials;
