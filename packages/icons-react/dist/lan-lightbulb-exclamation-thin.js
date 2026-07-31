import React from 'react';

export const LanLightbulbExclamationThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 0c106 0 192 86 192 192 0 51.2-20 97.7-52.7 132.1-23.6 24.9-43.3 55.3-43.3 89.6V432c0 44.2-35.8 80-80 80h-32c-44.2 0-80-35.8-80-80v-18.3c0-34.3-19.7-64.7-43.3-89.6C20 289.7 0 243.2 0 192 0 86 86 0 192 0m-80 432c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64v-16H112zm80-416C94.8 16 16 94.8 16 192c0 46.9 18.3 89.5 48.3 121.1C86 336 106.7 365.5 111.1 400h161.7c4.5-34.5 25.1-64 46.8-86.9 29.9-31.6 48.3-74.2 48.3-121.1 0-97.2-78.8-176-176-176zm0 312a16 16 0 1 1 0-32 16 16 0 1 1 0 32m2.9-239.7c6.6 1.4 11.5 7.4 11.2 14.4L200 248.3c-.2 4.3-3.7 7.7-8 7.7s-7.8-3.4-8-7.7l-6.1-145.6c-.4-8 6.1-14.7 14.1-14.7z"})
);

export default LanLightbulbExclamationThin;
