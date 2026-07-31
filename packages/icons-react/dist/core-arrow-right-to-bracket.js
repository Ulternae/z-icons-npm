import React from 'react';

export const CoreArrowRightToBracket = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 32c53 0 96 43 96 96v256c0 53-43 96-96 96h-96v-64h96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32h-96V32zm-73.4 201.4 2.2 2.4c10.3 12.6 9.5 31.1-2.2 42.8L192 429.2 146.8 384l96-96H0v-64h242.8l-96-96L192 82.7l150.6 150.6z"})
);

export default CoreArrowRightToBracket;
