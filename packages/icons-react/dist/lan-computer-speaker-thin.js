import React from 'react';

export const LanComputerSpeakerThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 384c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h181.5c2-5.6 4.5-10.9 7.4-16H64C28.7 32 0 60.7 0 96v240c0 35.3 28.7 64 64 64h176v-16zm40 80c-4.4 0-8 3.6-8 8s3.6 8 8 8h148.8c-2.9-5.1-5.4-10.4-7.4-16zM528 48c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32H336c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32zM336 32c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm32 304a64 64 0 1 1 128 0 64 64 0 1 1-128 0m144 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-80-192a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0m48 208a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
);

export default LanComputerSpeakerThin;
