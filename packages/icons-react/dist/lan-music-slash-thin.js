import React from 'react';

export const LanMusicSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.125 576.025 575.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M13.7-29.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l560 560c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L453.2 409.8c34.5-12.1 58.8-40.6 58.8-73.8V39.9c0-25.6-23.7-44.6-48.7-39l-224 49.8c-18.3 4-31.3 20.2-31.3 39v74.9L13.7-29.7zM232 188.6l264-58.7v161.8c-17.2-21.6-46.6-35.8-80-35.8-33.6 0-63.2 14.4-80.4 36.2zm115 115c13.9-18.9 39.6-31.6 69-31.6 44.2 0 80 28.7 80 64 0 28.5-23.4 52.7-55.6 61zm-139-48.4v100.6c-17.2-21.6-46.6-35.8-80-35.8-53 0-96 35.8-96 80s43 80 96 80 96-35.8 96-80V271.2zM466.8 16.5c15-3.3 29.2 8.1 29.2 23.4v73.7L224 174V89.6c0-11.2 7.8-21 18.8-23.4l224-49.8zM208 400c0 35.3-35.8 64-80 64s-80-28.7-80-64 35.8-64 80-64 80 28.7 80 64"})
);

export default LanMusicSlashThin;
