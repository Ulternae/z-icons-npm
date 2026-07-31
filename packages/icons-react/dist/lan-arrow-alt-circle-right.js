import React from 'react';

export const LanArrowAltCircleRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 1-448 0 224 224 0 1 1 448 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m272-84.7 84.7 84.7-84.7 84.7V304c0-8.8-7.2-16-16-16h-88c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h88c8.8 0 16-7.2 16-16zm101.7 90.3L385 273c9.4-9.4 9.4-24.6 0-33.9L281 135c-6.9-6.9-17.2-8.9-26.2-5.2S240 142.3 240 152v40h-72c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h72v40c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l104-104-11.3-11.3z"})
);

export default LanArrowAltCircleRight;
