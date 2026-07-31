import React from 'react';

export const LanAudioDescriptionThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 80c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm32 160v120c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h104v72c0 4.4 3.6 8 8 8s8-3.6 8-8V224c0-35.3-28.7-64-64-64h-8c-35.3 0-64 28.7-64 64m16 32v-32c0-26.5 21.5-48 48-48h8c26.5 0 48 21.5 48 48v32zm176-96c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h56c39.8 0 72-32.2 72-72v-48c0-39.8-32.2-72-72-72zm56 176h-48V176h48c30.9 0 56 25.1 56 56v48c0 30.9-25.1 56-56 56"})
);

export default LanAudioDescriptionThin;
