import React from 'react';

export const LanStarfighterTwinIonEngineAdvancedSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M152.3 52.8c11.5-13.4 9.9-33.6-3.5-45.1s-33.6-9.9-45.1 3.5l-88.3 103C5.5 125.8 0 140.6 0 155.8v200.4c0 15.3 5.5 30.1 15.4 41.7l88.3 103c11.5 13.4 31.7 15 45.1 3.5s15-31.7 3.5-45.1L64 356.3v-55.4l75.6 15.1c23.7 58.6 81.2 100 148.4 100s124.7-41.4 148.4-100.1l75.6-15.1v48L423 460c-11 13.8-8.8 33.9 5 45s33.9 8.8 45-5l89-111.2c9.1-11.3 14-25.4 14-40V148.5c0-16.1-6.1-31.6-17-43.4l-87.5-94.8c-12-13-32.2-13.8-45.2-1.8s-13.8 32.2-1.8 45.2l87.5 94.8v62.7l-75.6-15.1C412.7 137.4 355.2 96 288 96s-124.7 41.4-148.4 100.1L64 211.2v-55.4zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192m0 152a56 56 0 1 0 0-112 56 56 0 1 0 0 112"})
);

export default LanStarfighterTwinIonEngineAdvancedSolid;
