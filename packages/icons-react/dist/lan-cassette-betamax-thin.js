import React from 'react';

export const LanCassetteBetamaxThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 80c26.5 0 48 21.5 48 48v16H16v-16c0-26.5 21.5-48 48-48zM16 384V160h480v224c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm16 240a64 64 0 1 1 128 0 64 64 0 1 1-128 0m144 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m192-64c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16zm-96-16c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zm-160 80a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
);

export default LanCassetteBetamaxThin;
