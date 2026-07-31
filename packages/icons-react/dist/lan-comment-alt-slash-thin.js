import React from 'react';

export const LanCommentAltSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.125 576.025 576.125',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M13.7-29.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l560 560c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-89.4-89.4c35-14.3 59.7-48.7 59.7-88.9v-224c0-53-43-96-96-96L128 32c-15.3 0-29.8 3.6-42.6 10zM97.4 54c9.4-3.9 19.7-6 30.6-6h320c44.2 0 80 35.8 80 80v224c0 35.9-23.6 66.3-56.2 76.4zM48 128c0-9.8 1.8-19.2 5-27.8L40.7 87.9C35.1 100.1 32 113.7 32 128v224c0 53 43 96 96 96h32v75.9c0 11.1 9 20.1 20.1 20.1 4.2 0 8.2-1.3 11.6-3.7l126.6-89.4c2.7-1.9 5.9-2.9 9.2-2.9h73.2l-16-16h-57.2c-6.6 0-13.1 2-18.5 5.9l-101 71.4c-.2.2-5.6 3.9-16 11.3l-.4.3c-2.8 2-5.8 4.1-9.1 6.4-.7.5-1.6.7-2.4.7-2.1-.1-4.1-1.8-4.1-4.1V448c0-8.8-7.2-16-16-16h-32c-44.2 0-80-35.8-80-80z"})
);

export default LanCommentAltSlashThin;
