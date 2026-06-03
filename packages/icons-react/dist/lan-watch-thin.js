import React from 'react';

export const LanWatchThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M293-32c24.5 0 45 18.4 47.7 42.7l10.1 90.6C395.5 138 424 193.7 424 256s-28.5 118-73.2 154.7l-10.1 90.7C338 525.6 317.5 544 293 544H155c-24.5 0-45-18.4-47.7-42.7l-10.1-90.6C52.5 374 24 318.3 24 256s28.5-118 73.2-154.7l10.1-90.6C110-13.6 130.5-32 155-32zM123.2 499.5C125 515.7 138.7 528 155 528h138c16.3 0 30-12.3 31.8-28.5l8.4-76.1c-31.4 20.5-68.9 32.5-109.3 32.5s-77.9-12-109.3-32.6l8.5 76.1zM224 72a184 184 0 1 0 0 368 184 184 0 1 0 0-368m0 88c4.4 0 8 3.6 8 8v84.7l53.7 53.7c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-56-56c-1.5-1.5-2.3-3.5-2.3-5.7v-88c0-4.4 3.6-8 8-8zM155-16c-16.3 0-30 12.3-31.8 28.5l-8.5 76.1C146.1 68 183.6 56 224 56c40.3 0 77.8 12 109.3 32.5l-8.4-76C323-3.7 309.3-16 293-16z"})
);

export default LanWatchThin;
