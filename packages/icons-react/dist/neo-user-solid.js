import React from 'react';

export const NeoUserSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224.2 0c-40.3 0-75.9 12.9-101.5 38.5S84.2 99.7 84.2 140s12.9 75.9 38.5 101.5S183.9 280 224.2 280s75.8-12.9 101.5-38.5 38.5-61.2 38.5-101.5-12.9-75.9-38.5-101.5S264.4 0 224.2 0m-28 336c-33.5 0-62.2 1.5-86.3 6-24.2 4.5-45.5 12.2-62.8 25.7-35.8 28-44.8 73.1-46.6 127.5-.9 26.5 17.7 50.3 45 54.4C74.7 554 131.6 560 224.2 560s149.5-6 178.7-10.4c27.3-4.1 45.8-27.9 45-54.4-1.8-54.4-10.7-99.5-46.6-127.5-17.3-13.6-38.6-21.3-62.8-25.7-24.1-4.5-52.8-6-86.3-6z"})
);

export default NeoUserSolid;
