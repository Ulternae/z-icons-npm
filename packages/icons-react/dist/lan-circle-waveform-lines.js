import React from 'react';

export const LanCircleWaveformLines = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-16-368c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16zm80 56c0-8.8-7.2-16-16-16s-16 7.2-16 16v112c0 8.8 7.2 16 16 16s16-7.2 16-16zm-160 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16zm240 24c0-8.8-7.2-16-16-16s-16 7.2-16 16v32c0 8.8 7.2 16 16 16s16-7.2 16-16z"})
);

export default LanCircleWaveformLines;
