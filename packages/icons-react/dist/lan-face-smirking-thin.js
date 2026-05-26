import React from 'react';

export const LanFaceSmirkingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m96-56c0-4.4 3.6-8 8-8h72c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32c0-5.8 1.6-11.3 4.3-16H104c-4.4 0-8-3.6-8-8m64 24a16 16 0 1 0 32 0 16 16 0 1 0-32 0m136-32h72c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32c0-5.8 1.6-11.3 4.3-16H296c-4.4 0-8-3.6-8-8s3.6-8 8-8m72 16a16 16 0 1 0 0 32 16 16 0 1 0 0-32m-8 120c0 30.9-25.1 56-56 56H168c-4.4 0-8-3.6-8-8s3.6-8 8-8h136c22.1 0 40-17.9 40-40 0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanFaceSmirkingThin;
