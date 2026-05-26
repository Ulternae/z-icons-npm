import React from 'react';

export const LanGridRound2MinusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160m96-80a96 96 0 1 1-192 0 96 96 0 1 1 192 0M96 464a80 80 0 1 0 0-160 80 80 0 1 0 0 160m96-80a96 96 0 1 1-192 0 96 96 0 1 1 192 0m80-256a80 80 0 1 0 160 0 80 80 0 1 0-160 0m80 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m-88 152h176c4.4 0 8 3.6 8 8s-3.6 8-8 8H264c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanGridRound2MinusThin;
