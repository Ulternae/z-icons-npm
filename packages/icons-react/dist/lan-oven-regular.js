import React from 'react';

export const LanOvenRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352 48c26.5 0 48 21.5 48 48v80H48V96c0-26.5 21.5-48 48-48zm48 176v224c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224zM96 0C43 0 0 43 0 96v352c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-53-43-96-96-96zm32 112a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m104-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M96 296c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-13.3 0-24 10.7-24 24"})
);

export default LanOvenRegular;
