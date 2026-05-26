import React from 'react';

export const LanHeaderThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 40c0-4.4 3.6-8 8-8h128c4.4 0 8 3.6 8 8s-3.6 8-8 8H80v192h288V48h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h128c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v416h56c4.4 0 8 3.6 8 8s-3.6 8-8 8H312c-4.4 0-8-3.6-8-8s3.6-8 8-8h56V256H80v208h56c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h56V48H8c-4.4 0-8-3.6-8-8"})
);

export default LanHeaderThin;
