import React from 'react';

export const LanCodeBranch = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96m80-48c0 38.7-27.5 71-64 78.4V240h192c35.3 0 64-28.7 64-64v-17.6c-36.5-7.4-64-39.7-64-78.4 0-44.2 35.8-80 80-80s80 35.8 80 80c0 38.7-27.5 71-64 78.4V176c0 53-43 96-96 96H96v81.6c36.5 7.4 64 39.7 64 78.4 0 44.2-35.8 80-80 80S0 476.2 0 432c0-38.7 27.5-71 64-78.4V158.4C27.5 151 0 118.7 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80m208 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96M80 480a48 48 0 1 0 0-96 48 48 0 1 0 0 96"})
);

export default LanCodeBranch;
