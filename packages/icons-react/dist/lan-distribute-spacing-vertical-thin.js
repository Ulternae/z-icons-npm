import React from 'react';

export const LanDistributeSpacingVerticalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M512 472c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h496c4.4 0 8-3.6 8-8M144 336c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32zm224 16c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48H144c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48zM504 48c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8z"})
);

export default LanDistributeSpacingVerticalThin;
