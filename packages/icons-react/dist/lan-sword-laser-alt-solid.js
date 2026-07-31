import React from 'react';

export const LanSwordLaserAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -52.789 640 615.464',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M579.1-45.2 276.3 224h143.5L621.5-2.9c10.6-11.9 10-29.9-1.2-41.1s-29.3-11.8-41.2-1.2M22.9 486.6 45 508.7 153.7 400 109 355.3l-86.1 86.1c-12.5 12.5-12.5 32.8 0 45.3zm66.7 66.7c12.5 12.5 32.8 12.5 45.3 0l86.1-86.1-44.7-44.7L67.6 531.2l22.1 22.1zm41.9-220.7 112 112 145.4-145.4c10.1-10.1 2.9-27.3-11.3-27.3H205.5c-8.5 0-16.6 3.4-22.6 9.4l-51.3 51.3z"})
);

export default LanSwordLaserAltSolid;
