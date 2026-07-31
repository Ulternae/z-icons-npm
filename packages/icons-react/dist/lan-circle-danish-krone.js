import React from 'react';

export const LanCircleDanishKrone = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m160-112v125.8l69.8-58.1c6.8-5.7 16.9-4.7 22.5 2s4.7 16.9-2 22.5l-41.1 34.2 45.2 90.3c4 7.9.7 17.5-7.2 21.5s-17.5.7-21.5-7.2l-41.8-83.6-23.9 19.9v56.5c0 8.8-7.2 16-16 16s-16-7.2-16-16v-224c0-8.8 7.2-16 16-16s16 7.2 16 16zm194.9 112c-8.4 0-16.5 3-22.8 8.5-7.7 6.6-12.1 16.3-12.1 26.4V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V240c0-8.8 7.2-16 16-16 6.9 0 12.8 4.3 15 10.4 10.7-6.8 23.1-10.4 35.9-10.4H368c8.8 0 16 7.2 16 16s-7.2 16-16 16zm13.1 96a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
);

export default LanCircleDanishKrone;
