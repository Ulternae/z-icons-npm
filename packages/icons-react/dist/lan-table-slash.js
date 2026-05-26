import React from 'react';

export const LanTableSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M4.7-27.2c6.2-6.2 16.4-6.2 22.6 0l68.2 68.1C105 35.3 116.1 32 128 32h320c35.3 0 64 28.7 64 64v320c0 11.9-3.3 23-9 32.5l68.3 68.3c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L4.7-4.6c-6.2-6.2-6.2-16.4 0-22.6M96 154.5V304h149.5l32 32H96v80c0 17.7 14.3 32 32 32h261.5l32 32H128l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1l-.3-6.5V122.6l32 32zm382.8 269.8c.7-2.7 1.2-5.4 1.2-8.3v-80h-89.5zM358.5 304H480V192H246.5zM128 64c-2.9 0-5.7.4-8.3 1.1l94.9 94.9h265.5V96c0-17.7-14.3-32-32-32z"})
);

export default LanTableSlash;
