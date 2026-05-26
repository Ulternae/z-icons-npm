import React from 'react';

export const LanClothesHangerThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 16c-44.2 0-80 35.8-80 80 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-53 43-96 96-96s96 43 96 96c0 37.6-19 72.7-50.5 93.3l-39.6 25.8 253.8 155.1c17.6 10.8 28.4 29.9 28.4 50.6 0 32.7-26.5 59.3-59.3 59.3L59.9 480C26.8 480 0 453.2 0 420.1c0-20.2 10.2-39.1 27.2-50.2l297.5-194c27-17.6 43.3-47.7 43.3-79.9 0-44.2-35.8-80-80-80m-9 208.8L35.9 383.3c-12.4 8.1-19.9 22-19.9 36.8 0 24.2 19.7 43.9 43.9 43.9h456.9c23.9 0 43.3-19.4 43.3-43.3 0-15.1-7.8-29-20.7-36.9z"})
);

export default LanClothesHangerThin;
