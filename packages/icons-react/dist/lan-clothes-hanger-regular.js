import React from 'react';

export const LanClothesHangerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 48c-31.3 0-57.5 22.6-62.9 52.3-2.4 13-14.9 21.7-27.9 19.3s-21.7-14.9-19.3-27.9C187.5 39.6 233.1 0 288.1 0c61.9 0 112 50.1 112 112 0 38-19.1 73.5-50.9 94.5l-21.6 14.2 218.2 138.9c18.8 12 30.2 32.8 30.2 55.1 0 36.1-29.2 65.3-65.3 65.3H65.6C29.4 480 0 450.6 0 414.4c0-22.1 11.1-42.6 29.5-54.8l293.2-193.2c18.3-12 29.3-32.5 29.3-54.4 0-35.3-28.7-64-64-64m-4.4 201.6L55.9 399.7C51 403 48 408.5 48 414.4c0 9.7 7.9 17.6 17.6 17.6h445.1c9.6 0 17.3-7.8 17.3-17.3 0-5.9-3-11.4-8-14.6z"})
);

export default LanClothesHangerRegular;
