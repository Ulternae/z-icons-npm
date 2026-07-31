import React from 'react';

export const LanIndustryAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 64c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v151.4l156.6-84.3c16-8.6 35.4 3 35.4 21.1v63.2l156.6-84.3c16-8.6 35.4 3 35.4 21.1V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm240 256c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM96 336v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m272-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"})
);

export default LanIndustryAltSolid;
