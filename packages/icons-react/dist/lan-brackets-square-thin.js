import React from 'react';

export const LanBracketsSquareThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M408 32c22.1 0 40 17.9 40 40v368c0 22.1-17.9 40-40 40H296c-4.4 0-8-3.6-8-8s3.6-8 8-8h112c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H296c-4.4 0-8-3.6-8-8s3.6-8 8-8zM40 32h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-13.3 0-24 10.7-24 24v368c0 13.3 10.7 24 24 24h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-22.1 0-40-17.9-40-40V72c0-22.1 17.9-40 40-40"})
);

export default LanBracketsSquareThin;
