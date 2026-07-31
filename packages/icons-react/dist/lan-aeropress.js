import React from 'react';

export const LanAeropress = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M272 144c26.5 0 48 21.5 48 48v208h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v32l-.2 4.9c-2.5 24.2-22.9 43.1-47.8 43.1H112l-4.9-.2C82.9 509.3 64 488.9 64 464v-32H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V192c0-26.5 21.5-48 48-48zM96 464c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32H96zm16-288c-8.8 0-16 7.2-16 16v208h192V192c0-8.8-7.2-16-16-16zm120 176a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-80a24 24 0 1 1 0-48 24 24 0 1 1 0 48M320 0c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v64h-32V32H128v64H96V32H64c-8.8 0-16-7.2-16-16S55.2 0 64 0z"})
);

export default LanAeropress;
