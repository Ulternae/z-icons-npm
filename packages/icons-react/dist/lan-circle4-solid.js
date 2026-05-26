import React from 'react';

export const LanCircle4Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56-368c13.3 0 24 10.7 24 24v88h48v-88c0-13.3 10.7-24 24-24s24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-56c-22.1 0-40-17.9-40-40v-96c0-13.3 10.7-24 24-24"})
);

export default LanCircle4Solid;
