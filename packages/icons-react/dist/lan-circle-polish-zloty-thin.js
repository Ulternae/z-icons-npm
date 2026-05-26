import React from 'react';

export const LanCirclePolishZlotyThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m327.4-128c4.4 0 8 3.6 8 8v108.4l29.6-11.8c4.1-1.6 8.8.4 10.4 4.5s-.4 8.8-4.5 10.4l-35.5 14.2v114.4c0 4.4-3.6 8-8 8s-8-3.6-8-8v-108l-28.5 11.4c-4.1 1.6-8.8-.4-10.4-4.5s.4-8.8 4.5-10.4l34.4-13.8V136c0-4.4 3.6-8 8-8M152 192h96c2.8 0 5.4 1.5 6.8 3.9s1.5 5.4.2 7.9L169.2 368H248c4.4 0 8 3.6 8 8s-3.6 8-8 8h-92c-2.8 0-5.4-1.5-6.8-3.9s-1.5-5.4-.2-7.8L234.8 208H152c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanCirclePolishZlotyThin;
