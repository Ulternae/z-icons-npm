import React from 'react';

export const LanDialMedSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64M128 287.2c0-80.2 59-146.6 136-158.2v158.2c0 13.3 10.7 24 24 24s24-10.7 24-24V129c77 11.6 136 78 136 158.2 0 88.4-71.6 160-160 160s-160-71.6-160-160m384 .8a32 32 0 1 1 64 0 32 32 0 1 1-64 0M32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 480a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanDialMedSolid;
