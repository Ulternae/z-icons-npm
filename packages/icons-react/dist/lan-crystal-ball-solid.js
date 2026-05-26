import React from 'react';

export const LanCrystalBallSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M426.1 473.4c3.8 4.2 5.9 9.8 5.9 15.5 0 12.8-10.4 23.1-23.1 23.1H39.1C26.3 512 16 501.6 16 488.9c0-5.7 2.1-11.2 5.9-15.5L73.6 416h300.8zM224 0c123.7 0 224 100.3 224 224 0 54.8-19.7 105.1-52.5 144h-343C19.7 329.1 0 278.8 0 224 0 100.3 100.3 0 224 0m87.5 132.3c-2.6-7-12.4-7-15 0l-18.4 49.8-49.8 18.4c-7 2.6-7 12.4 0 15l49.8 18.4 18.4 49.8c2.6 7 12.4 7 15 0l18.4-49.8 49.8-18.4c7-2.6 7-12.4 0-15l-49.8-18.4zm-144-48c-2.6-7-12.4-7-15 0l-9.8 26.4-26.4 9.8c-7 2.6-7 12.4 0 15l26.4 9.8 9.8 26.4c2.6 7 12.4 7 15 0l9.8-26.4 26.4-9.8c7-2.6 7-12.4 0-15l-26.4-9.8z"})
);

export default LanCrystalBallSolid;
