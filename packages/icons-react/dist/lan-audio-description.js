import React from 'react';

export const LanAudioDescription = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 96c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm32 160v112c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h80v48c0 8.8 7.2 16 16 16s16-7.2 16-16V224c0-35.3-28.7-64-64-64h-16c-35.3 0-64 28.7-64 64m32 32v-32c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32v32zm160-96c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h56c39.8 0 72-32.2 72-72v-48c0-39.8-32.2-72-72-72zm56 160h-40V192h40c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40"})
);

export default LanAudioDescription;
