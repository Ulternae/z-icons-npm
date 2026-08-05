import React from 'react';

export function LanFilmStack({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96-16c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16M48 80c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-8.8 0-16-7.2-16-16m48 112H64c-17.7 0-32 14.3-32 32v32h64zm0-32h352c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64zm32 288h256V192H128zm288-256v64h64v-32c0-17.7-14.3-32-32-32zm64 96h-64v64h64zm0 96h-64v64h32c17.7 0 32-14.3 32-32zM96 448v-64H32v32c0 17.7 14.3 32 32 32zm-64-96h64v-64H32z"})
  );
}

export default LanFilmStack;
