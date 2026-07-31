import React from 'react';

export const LanPaperPlaneAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m169.9 280-75 168.6L461.2 280zm291.3-48L94.9 63.4l75 168.6zM34.8 465.6 128 256 34.8 46.4C33 42.2 32 37.6 32 33 32 14.8 46.7 0 64.8 0c4.7 0 9.4 1 13.7 3l475.7 219c13.3 6.1 21.8 19.4 21.8 34s-8.5 27.9-21.8 34L78.5 509c-4.3 2-9 3-13.7 3-18.1 0-32.8-14.8-32.8-33 0-4.6 1-9.2 2.8-13.4"})
);

export default LanPaperPlaneAltRegular;
