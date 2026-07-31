import React from 'react';

export const LanMittenThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M136 0C60.9 0 0 60.9 0 136c0 13.4.6 27.3 4.1 41.2L56 385c-13.8 3.5-24 16.1-24 31v64c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32v-64c0-17.1-13.4-31.1-30.3-32l76.5-88.7c11.5-13.1 17.8-29.9 17.8-47.3v-1c0-39.2-31.8-71-71-71-23.3 0-45.1 11.4-58.4 30.6l-2.5 3.7-33.3-112.8C265.7 39.7 212.6 0 152.3 0zm196.6 384H72.3l-.5-1.9-52.2-208.7c-3-12-3.6-24.2-3.6-37.3 0-66.3 53.7-120 120-120h16.3c53.2 0 100 35 115.1 86l38.1 128.8c.9 3 3.4 5.1 6.4 5.6s6.1-.8 7.8-3.3l12.1-17.4c10.3-14.8 27.2-23.7 45.2-23.7 30.4 0 55 24.6 55 55v1c0 13.6-4.9 26.7-13.8 36.9l-85.5 99.1zM64 400h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"})
);

export default LanMittenThin;
