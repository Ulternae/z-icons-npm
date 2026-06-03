import React from 'react';

export const LanChessKingAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 320 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160-32c4.4 0 8 3.6 8 8v48h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48v56h94.1c14.3 0 25.9 11.6 25.9 25.9 0 4-.9 8-2.7 11.6L244 216h4c4.4 0 8 3.6 8 8s-3.6 8-8 8h-7.2L256 384l56.2 70.3c5 6.3 7.8 14.1 7.8 22.2 0 19.6-15.9 35.5-35.5 35.5h-249C15.9 512 0 496.1 0 476.5c0-8.1 2.7-15.9 7.8-22.2L64 384l15.2-152H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h4l-41.3-82.5c-1.8-3.6-2.7-7.6-2.7-11.6C32 107.6 43.6 96 57.9 96H152V40h-48c-4.4 0-8-3.6-8-8s3.6-8 8-8h48v-48c0-4.4 3.6-8 8-8m88 432H72v-.4l-51.7 64.7c-2.8 3.5-4.3 7.8-4.3 12.2 0 10.8 8.7 19.5 19.5 19.5h248.9c9.4 0 17.3-6.7 19.1-15.6l.4-3.9c0-3.3-.8-6.6-2.4-9.4l-1.8-2.7-51.7-64.7v.4zM80.1 384H240l-15.2-152H95.4L80.2 384zM57.9 112c-4.8 0-8.8 3.4-9.7 7.9l-.2 2c0 1.6.4 3.1 1 4.4L93.8 216H226l44.8-89.7.7-2.1c.2-.7.3-1.5.3-2.3 0-4.8-3.4-8.8-7.9-9.7l-2-.2H57.7z"})
);

export default LanChessKingAltThin;
