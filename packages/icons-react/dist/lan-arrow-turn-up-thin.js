import React from 'react';

export const LanArrowTurnUpThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8h96c53 0 96-43 96-96V27.3l138.3 138.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-152-152c-3.1-3.1-8.2-3.1-11.3 0l-152 152c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L184 27.3V416c0 44.2-35.8 80-80 80z"})
);

export default LanArrowTurnUpThin;
