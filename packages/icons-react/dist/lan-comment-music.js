import React from 'react';

export const LanCommentMusic = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M76.8 364.8c8.1 10.1 9.4 24.1 3.2 35.4l-40.2 73.6 101-43.3c7.9-3.4 16.8-3.5 24.8-.2 27.6 11.3 58.2 17.6 90.4 17.6 125.7 0 224-95 224-208S381.7 32 256 32 32 127 32 240c0 46.7 16.5 89.8 44.8 124.8m-24.9 20.1C19.3 344.6 0 294.4 0 240 0 107.5 114.6 0 256 0s256 107.5 256 240-114.6 240-256 240c-36.5 0-71.2-7.2-102.6-20L37 509.9c-3.7 1.6-7.5 2.1-11.5 2.1C11.4 512 0 500.6 0 486.5c0-4.3 1.1-8.5 3.1-12.2zM296 128h24c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v112l-.1-.1c.1 1.3.1 2.7.1 4.1 0 33.1-28.7 60-64 60s-64-26.9-64-60 28.7-60 64-60c11.7 0 22.6 2.9 32 8v-72c0-13.3 10.7-24 24-24m-24 148c0-13.5-12.3-28-32-28s-32 14.5-32 28 12.4 28 32 28 32-14.5 32-28"})
);

export default LanCommentMusic;
