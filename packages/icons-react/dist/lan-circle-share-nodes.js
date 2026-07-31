import React from 'react';

export const LanCircleShareNodes = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m64-384a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64c0 6.3.9 12.4 2.6 18.2l-53.7 32.2C193.3 199 177.5 192 160 192c-35.3 0-64 28.7-64 64s28.7 64 64 64c17.5 0 33.4-7 44.9-18.4l53.7 32.2c-1.7 5.8-2.6 11.9-2.6 18.2 0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64c-17.5 0-33.4 7-44.9 18.4l-53.7-32.2c1.7-5.8 2.6-11.9 2.6-18.2s-.9-12.4-2.6-18.2l53.7-32.2C286.6 217 302.5 224 320 224m0 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-192-64a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
);

export default LanCircleShareNodes;
