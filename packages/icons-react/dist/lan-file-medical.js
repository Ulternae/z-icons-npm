import React from 'react';

export const LanFileMedical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32h128v96c0 35.3 28.7 64 64 64h96v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32m160 13.3L338.7 160H256c-17.7 0-32-14.3-32-32zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm112 240c-17.7 0-32 14.3-32 32v16h-16c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h16v16c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-16h16c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-16v-16c0-17.7-14.3-32-32-32zm32 136v24h-32v-40c0-4.4-3.6-8-8-8h-40v-32h40c4.4 0 8-3.6 8-8v-40h32v40c0 4.4 3.6 8 8 8h40v32h-40c-4.4 0-8 3.6-8 8z"})
);

export default LanFileMedical;
