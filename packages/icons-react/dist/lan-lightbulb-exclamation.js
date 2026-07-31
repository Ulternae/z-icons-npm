import React from 'react';

export const LanLightbulbExclamation = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 0c106 0 192 86 192 192 0 51.2-20 97.7-52.7 132.1-23.6 24.9-43.3 55.3-43.3 89.6V432c0 44.2-35.8 80-80 80h-32c-44.2 0-80-35.8-80-80v-18.3c0-34.3-19.7-64.7-43.3-89.6C20 289.7 0 243.2 0 192 0 86 86 0 192 0m-64 432c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-16H128zm64-400c-88.4 0-160 71.6-160 160 0 42.7 16.7 81.4 43.9 110.1 19.9 20.9 40.4 48.7 48.5 81.9h135.3c8.1-33.2 28.6-61 48.5-81.9 27.2-28.7 43.9-67.4 43.9-110.1 0-88.4-71.6-160-160-160zm0 288a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-224c13.6 0 24.3 11.6 23.4 25.1l-7.4 104c-.6 8.4-7.6 14.9-16 14.9s-15.4-6.5-16-14.9l-7.4-104c-1-13.6 9.8-25.1 23.4-25.1"})
);

export default LanLightbulbExclamation;
