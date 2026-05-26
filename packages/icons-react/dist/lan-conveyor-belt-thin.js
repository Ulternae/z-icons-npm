import React from 'react';

export const LanConveyorBeltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 16h224c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H208c-17.7 0-32-14.3-32-32V48c0-17.7 14.3-32 32-32m-48 32v160c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H208c-26.5 0-48 21.5-48 48m384 288c44.2 0 80 35.8 80 80s-35.8 80-80 80H96c-44.2 0-80-35.8-80-80s35.8-80 80-80zM96 320c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zm32 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m176-32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m160-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanConveyorBeltThin;
