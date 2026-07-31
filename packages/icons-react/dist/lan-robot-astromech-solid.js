import React from 'react';

export const LanRobotAstromechSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c70.7 0 128 57.3 128 128v32H128v-32C128 57.3 185.3 0 256 0m0 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m48 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32M48 240c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v158.3c0 8.7 2.4 17.2 6.8 24.7l38.9 64.8c3 4.9 3 11.1.2 16.1s-8.1 8.1-13.9 8.1h-96c-8.8 0-16-7.2-16-16V384l-45.3 45.3c-12 12-28.3 18.7-45.3 18.7h-75c-17 0-33.3-6.7-45.3-18.7L128 384v112c0 8.8-7.2 16-16 16H16c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2.2-16.1L41.2 423c4.5-7.5 6.8-16 6.8-24.7zm160 16c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanRobotAstromechSolid;
