import React from 'react';

export const LanCircleYen = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m167.7-125.7c7.5-4.6 17.4-2.2 22 5.3L256 244.5l66.3-108.8c4.6-7.5 14.4-9.9 22-5.3s9.9 14.4 5.3 22L286.4 256H320c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-32h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h33.6l-63.2-103.7c-4.6-7.5-2.2-17.4 5.3-22"})
);

export default LanCircleYen;
