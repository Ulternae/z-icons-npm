import React from 'react';

export const LanCableCar = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -24 512 536',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 24c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24m-72 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-56 232v96H64v-64c0-17.7 14.3-32 32-32zm32 96v-96h128v96zm160 0v-96h64c17.7 0 32 14.3 32 32v64zm96 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-64zM96 224c-35.3 0-64 28.7-64 64v160c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64H272V108.1l212.4-60.7c8.5-2.4 13.4-11.3 11-19.8s-11.3-13.4-19.8-11l-224 64-224 64c-8.5 2.4-13.4 11.3-11 19.8s11.3 13.4 19.8 11L240 117.2V224z"})
);

export default LanCableCar;
