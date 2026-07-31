import React from 'react';

export const LanArrowAltCircleLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 256a224 224 0 1 1 448 0 224 224 0 1 1-448 0m480 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0m-272 84.7L155.3 256l84.7-84.7V208c0 8.8 7.2 16 16 16h88c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-88c-8.8 0-16 7.2-16 16zM231 135 127 239c-9.4 9.4-9.4 24.6 0 33.9L231 377c6.9 6.9 17.2 8.9 26.2 5.2S272 369.7 272 360v-40h72c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40h-72v-40c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2"})
);

export default LanArrowAltCircleLeft;
