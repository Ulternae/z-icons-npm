import React from 'react';

export const LanCarSide = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M171.3 64c-19.6 0-37.3 11.9-44.6 30.2L87.6 192H224V64zM256 192h216L390.4 83.2C381.3 71.1 367.1 64 352 64h-96zm256 0c70.7 0 128 57.3 128 128v16c0 35.3-28.7 64-64 64h-16.4c-4 44.9-41.7 80-87.6 80s-83.6-35.1-87.6-80H239.7c-4 44.9-41.7 80-87.6 80s-83.6-35.1-87.6-80h-.4c-35.3 0-64-28.7-64-64v-80c0-31.5 22.8-57.7 52.8-63L97.1 82.3C109.2 51.9 138.6 32 171.3 32H352c25.2 0 48.9 11.9 64 32zM387.3 368c10.4-36.9 44.4-64 84.7-64s74.2 27.1 84.7 64H576c17.7 0 32-14.3 32-32v-16c0-53-43-96-96-96H64c-17.7 0-32 14.3-32 32v80c0 17.7 14.3 32 32 32h3.3c10.4-36.9 44.4-64 84.7-64s74.2 27.1 84.7 64zM152 448a56 56 0 1 0 0-112 56 56 0 1 0 0 112m376-56a56 56 0 1 0-112 0 56 56 0 1 0 112 0"})
);

export default LanCarSide;
