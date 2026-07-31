import React from 'react';

export const LanFilmCanister = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 16c0-8.8 7.2-16 16-16h136c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16M0 80c0-8.8 7.2-16 16-16h336c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v384h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V96H16C7.2 96 0 88.8 0 80m64 16v384h240V96zm64 48c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16s-16-7.2-16-16V160c0-8.8 7.2-16 16-16m320 304h-64v-32h64c8.8 0 16-7.2 16-16v-32c0-26.5 21.5-48 48-48h16c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H384v-32h144c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48h-16c-8.8 0-16 7.2-16 16v32c0 26.5-21.5 48-48 48"})
);

export default LanFilmCanister;
