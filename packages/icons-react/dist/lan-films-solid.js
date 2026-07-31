import React from 'react';

export const LanFilmsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm-72 32c13.3 0 24 10.7 24 24v296c0 8.8 7.2 16 16 16h360c13.3 0 24 10.7 24 24s-10.7 24-24 24H64c-35.3 0-64-28.7-64-64V152c0-13.3 10.7-24 24-24m120-32v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m0 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m16 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM432 96v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m16 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-16 128v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"})
);

export default LanFilmsSolid;
