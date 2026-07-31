import React from 'react';

export const LanFileMagnifyingGlassRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48h112v88c0 39.8 32.2 72 72 72h88v240c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16m160 19.9 92.1 92.1H248c-13.3 0-24-10.7-24-24zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm198.5 320c0-47.8-38.7-86.5-86.5-86.5S89.5 272.2 89.5 320s38.7 86.5 86.5 86.5c15.2 0 29.4-3.9 41.8-10.7l37.2 37.3c9.4 9.4 24.6 9.4 33.9.1s9.4-24.6.1-33.9l-37.2-37.4c6.9-12.4 10.8-26.7 10.8-41.8zM176 278a42 42 0 1 1 0 84 42 42 0 1 1 0-84"})
);

export default LanFileMagnifyingGlassRegular;
