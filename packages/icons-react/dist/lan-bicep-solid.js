import React from 'react';

export const LanBicepSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M216.1 0c30.9 0 56 25.1 56 56v16c0 48.6-39.4 88-88 88h-20.7l9.2 120.8 3.8 48.9c1 13.2 12.5 23.1 25.7 22.1s23.1-12.5 22.1-25.8l-5.7-74.4c35.4-17.7 75.3-27.6 117.6-27.6 57.5 0 110.7 18.4 154.1 49.6 14.7 10.6 22 27.4 22 43.9l-.1 116.6c0 29.5-22.9 53.9-52.2 55.8l-330.2 22c-.5 0-1.1.1-1.6.1-70.7 0-128-57.3-128-128 0-133.1 22.6-254.5 37-318.5C46 26.1 81.2 0 120.4 0z"})
);

export default LanBicepSolid;
