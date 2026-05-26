import React from 'react';

export const LanBoxBallotSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m137.9 155.4 82.7 82.7c18.7 18.7 49.1 18.7 67.9 0l101.6-101.6c18.7-18.7 18.7-49.1 0-67.9l-82.7-82.7c-18.7-18.7-49.1-18.7-67.9 0L137.9 87.5c-18.7 18.7-18.7 49.1 0 67.9M170.7 256l-67.4-67.4c-16.9-16.9-26.1-38.5-27.6-60.6H64c-35.3 0-64 28.7-64 64v160h512V192c0-35-28.1-63.4-62.9-64-4.2 15.3-12.4 29.8-24.4 41.8L338.5 256H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zM512 400H0v48c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64z"})
);

export default LanBoxBallotSolid;
