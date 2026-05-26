import React from 'react';

export const LanBaguetteRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M578.6 83.6c-24.5-36.8-74.2-46.7-110.9-22.2l-69.8 46.5L433 143c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L357.2 135l-74.5 49.6 38.3 38.3c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L242 211.7l-74.5 49.6 41.5 41.5c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48.3-48.3-43.1 28.7C46.9 341.6 37 391.3 61.5 428s74.2 46.7 110.9 22.2l384-256c36.8-24.5 46.7-74.2 22.2-110.9zM618.5 57c39.2 58.8 23.3 138.3-35.5 177.5l-384 256C140.2 529.7 60.7 513.8 21.5 455S-1.8 316.7 57 277.5l384-256C499.8-17.7 579.3-1.8 618.5 57"})
);

export default LanBaguetteRegular;
