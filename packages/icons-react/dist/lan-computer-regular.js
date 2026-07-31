import React from 'react';

export const LanComputerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M348.8 32C340.7 46.1 336 62.5 336 80H64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h272v48H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM336 432c0 17.5 4.7 33.9 12.8 48H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm96-352v48h96V80zm0 96v48h96v-48zm0 96v160h96V272zM384 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48zm96 240a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanComputerRegular;
