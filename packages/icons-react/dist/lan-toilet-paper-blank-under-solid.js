import React from 'react';

export const LanToiletPaperBlankUnderSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M327.1 32c-8.8 11.1-16 23.1-21.9 34.8C283.8 109.5 272 165.2 272 224s11.8 114.5 33.2 157.2c5.9 11.7 13.1 23.7 21.9 34.8H96c-53 0-96-86-96-192S43 32 96 32zM416 288c17.7 0 32-28.7 32-64s-14.3-64-32-64-32 28.7-32 64 14.3 64 32 64m0 128c-53 0-96-86-96-192s43-192 96-192 96 86 96 192-43 192-96 192m-288 72v-24h288c43 0 74.7-26.7 96-57.6V488c0 30.9-25.1 56-56 56H184c-30.9 0-56-25.1-56-56"})
);

export default LanToiletPaperBlankUnderSolid;
