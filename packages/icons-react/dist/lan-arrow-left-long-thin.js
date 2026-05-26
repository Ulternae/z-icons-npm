import React from 'react';

export const LanArrowLeftLongThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M2.3 250.3c-3.1 3.1-3.1 8.2 0 11.3l152 152c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L27.3 264H568c4.4 0 8-3.6 8-8s-3.6-8-8-8H27.3l138.4-138.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-152 152z"})
);

export default LanArrowLeftLongThin;
