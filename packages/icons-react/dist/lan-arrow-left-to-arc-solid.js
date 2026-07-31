import React from 'react';

export const LanArrowLeftToArcSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 256c0-106 86-192 192-192 17.7 0 32-14.3 32-32S273.7 0 256 0C114.6 0 0 114.6 0 256s114.6 256 256 256c17.7 0 32-14.3 32-32s-14.3-32-32-32c-106 0-192-86-192-192m105.4-22.6c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 288H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H269.3l41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96z"})
);

export default LanArrowLeftToArcSolid;
