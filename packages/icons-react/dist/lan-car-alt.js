import React from 'react';

export const LanCarAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M169.7 64h172.7c27.5 0 52 17.6 60.7 43.8l28.1 84.2H80.9l28.1-84.2A63.87 63.87 0 0 1 169.7 64M78.6 97.6l-32.3 96.9C19.6 202.2 0 226.8 0 256v96c0 23.7 12.9 44.4 32 55.4V464c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h384v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-56.6c19.1-11.1 32-31.7 32-55.4v-96c0-29.2-19.6-53.8-46.3-61.5l-32.3-96.9A95.95 95.95 0 0 0 342.3 32H169.7c-41.3 0-78 26.4-91.1 65.6M336 384v-48c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32v48H64c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32zm-128 0v-48h96v48zM64 288c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-8.8 0-16 7.2-16 16m320-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanCarAlt;
