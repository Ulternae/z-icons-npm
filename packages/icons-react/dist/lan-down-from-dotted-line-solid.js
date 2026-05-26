import React from 'react';

export const LanDownFromDottedLineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M209 505c-9.4 9.4-24.6 9.4-33.9 0L31 361c-6.9-6.9-8.9-17.2-5.2-26.2S38.3 320 48 320h80V176c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v144h80c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2zM64 32a32 32 0 1 1-64 0 32 32 0 1 1 64 0m74.7-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m138.6 32a32 32 0 1 1-64 0 32 32 0 1 1 64 0M352 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanDownFromDottedLineSolid;
