import React from 'react';

export const LanAmpGuitarSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 88v8h224v-8c0-22.1-17.9-40-40-40H184c-22.1 0-40 17.9-40 40m-48 8v-8c0-48.6 39.4-88 88-88h144c48.6 0 88 39.4 88 88v8h32c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm24 96a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m152-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-304 88h288v64H112zm-16-48c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"})
);

export default LanAmpGuitarSolid;
