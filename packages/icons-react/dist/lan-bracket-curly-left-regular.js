import React from 'react';

export const LanBracketCurlyLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 256 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64.5 120c0-48.6 39.4-88 88-88h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-22.1 0-40 17.9-40 40v45.5c0 23.3-9.3 45.7-25.8 62.2L58.4 256l28.3 28.3c16.5 16.5 25.8 38.9 25.8 62.2V392c0 22.1 17.9 40 40 40h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-48.6 0-88-39.4-88-88v-45.5c0-10.6-4.2-20.8-11.7-28.3L7.5 273c-9.4-9.4-9.4-24.6 0-33.9l45.3-45.3c7.5-7.5 11.7-17.7 11.7-28.3z"})
);

export default LanBracketCurlyLeftRegular;
