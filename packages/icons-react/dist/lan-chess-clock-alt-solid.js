import React from 'react';

export const LanChessClockAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M336 40c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v32h72c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64 0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32h168V64h-32c-13.3 0-24-10.7-24-24m192 232a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-136-8v-48c0-13.3 10.7-24 24-24s24 10.7 24 24v48c0 13.3-10.7 24-24 24s-24-10.7-24-24M80.8 351.2a112 112 0 1 0 158.4-158.4A112 112 0 1 0 80.8 351.2m101.8-135.8c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-33.9 33.9c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9z"})
);

export default LanChessClockAltSolid;
