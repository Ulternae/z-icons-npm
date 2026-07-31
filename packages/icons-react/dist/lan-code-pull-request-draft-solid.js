import React from 'react';

export const LanCodePullRequestDraftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M56 80a24 24 0 1 1 48 0 24 24 0 1 1-48 0m56 73.3c28.3-12.3 48-40.5 48-73.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 32.8 19.7 61 48 73.3v205.3C19.7 371 0 399.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V153.4zM104 432c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24m200 24c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24m0 56c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80m40-432a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-40 192a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
);

export default LanCodePullRequestDraftSolid;
