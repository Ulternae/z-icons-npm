import React from 'react';

export const LanFolderMedicalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 448H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h138.7c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4H448c35.3 0 64 28.7 64 64v240c0 35.3-28.7 64-64 64M224 200v40h-40c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h40v40c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40h40c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-40v-40c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"})
);

export default LanFolderMedicalSolid;
