import React from 'react';

export const LanCarBuilding = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 32H64c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h80v32H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h224c35.3 0 64 28.7 64 64v47.8h-32V64c0-17.7-14.3-32-32-32M96 128c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16zm16 96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16m197.5-32c-14.7 0-27.5 10-31 24.2L260.6 288h247l-17.9-71.8C486 202 473.2 192 458.5 192zm-62.1 16.5c7.1-28.5 32.7-48.5 62.1-48.5h149c29.4 0 55 20 62.1 48.5l21.8 87.2c20 10.8 33.6 32 33.6 56.3v144c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H224v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V352c0-24.3 13.6-45.5 33.6-56.3zM544 352c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v96h320zm-256 8a24 24 0 1 1 0 48 24 24 0 1 1 0-48m168 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanCarBuilding;
