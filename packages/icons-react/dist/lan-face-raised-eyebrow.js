import React from 'react';

export const LanFaceRaisedEyebrow = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56-256a24 24 0 1 0-48 0 24 24 0 1 0 48 0m136 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-160 88c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H192c-8.8 0-16 7.2-16 16m161.2-203.9c8.4-5.3 19.2-4.8 27.1 1.2l10.1 7.5c7.1 5.3 17.1 3.9 22.4-3.2s3.9-17.1-3.2-22.4l-10.1-7.5c-18.5-13.9-43.7-15-63.3-2.7l-40.7 25.5c-7.5 4.7-9.8 14.6-5.1 22s14.6 9.8 22 5.1l40.7-25.5zM128 160c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanFaceRaisedEyebrow;
