import React from 'react';

export const LanTrainSubway = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.018 0 384.018 544.05',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M176 32v192H32V96c0-35.3 28.7-64 64-64zm32 0h80c35.3 0 64 28.7 64 64v128H208zM0 224v128c0 42.5 27.6 78.5 65.9 91.2L3.7 517.8c-5.7 6.8-4.7 16.9 2 22.5s16.9 4.7 22.5-2l75.2-90.2h177l75.2 90.2c5.7 6.8 15.7 7.7 22.5 2s7.7-15.7 2-22.5l-62.2-74.6c38.5-12.7 66.1-48.7 66.1-91.2V96c0-53-43-96-96-96H96C43 0 0 43 0 96zm352 128c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64v-96h320zm-64-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-168-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanTrainSubway;
