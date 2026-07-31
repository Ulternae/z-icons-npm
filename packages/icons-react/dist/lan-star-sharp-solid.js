import React from 'react';

export const LanStarSharpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M278.9 16.7C275.7 6.8 266.5 0 256 0s-19.7 6.8-22.9 16.7L182.5 176H24c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7l130.8 101.8-51 160c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7L256 406.4l129.3 100.5c8.3 6.5 19.8 6.8 28.5.7s12.3-16.9 9.1-27l-51-159.9 130.8-101.8c8.1-6.3 11.3-17 8-26.7S498.3 176 488 176H329.5L278.8 16.7z"})
);

export default LanStarSharpSolid;
