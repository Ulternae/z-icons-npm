import React from 'react';

export const LanArrowsToDottedLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m197.7 189.7 88-88c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L200 164.7V-24c0-4.4-3.6-8-8-8s-8 3.6-8 8v188.7l-74.3-74.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l88 88c3.1 3.1 8.2 3.1 11.3 0m0 132.7c-3.1-3.1-8.2-3.1-11.3 0l-88 88c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l74.3-74.4V536c0 4.4 3.6 8 8 8s8-3.6 8-8V347.3l74.3 74.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-88-88zM16 240a16 16 0 1 0 0 32 16 16 0 1 0 0-32m72 16a16 16 0 1 0 32 0 16 16 0 1 0-32 0m104-16a16 16 0 1 0 0 32 16 16 0 1 0 0-32m72 16a16 16 0 1 0 32 0 16 16 0 1 0-32 0m104-16a16 16 0 1 0 0 32 16 16 0 1 0 0-32"})
);

export default LanArrowsToDottedLineThin;
