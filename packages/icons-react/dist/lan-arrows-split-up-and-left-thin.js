import React from 'react';

export const LanArrowsSplitUpAndLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.025 -32.025 512.025 544.025',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M325.7-29.7c-3.1-3.1-8.2-3.1-11.3 0l-88 88c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L312-4.7v333.3c-18.4-29.2-50.9-48.6-88-48.6H27.3l74.3-74.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-88 88c-3.1 3.1-3.1 8.2 0 11.3l88 88c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L27.3 296H224c48.6 0 88 39.4 88 88 0 70.7 57.3 128 128 128h32c4.4 0 8-3.6 8-8s-3.6-8-8-8h-32c-61.9 0-112-50.1-112-112V-4.7l74.3 74.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-88-88z"})
);

export default LanArrowsSplitUpAndLeftThin;
