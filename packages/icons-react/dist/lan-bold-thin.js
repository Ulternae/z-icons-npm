import React from 'react';

export const LanBoldThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v416H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h256c66.3 0 120-53.7 120-120 0-56.7-39.3-104.2-92.1-116.7 35.7-18.7 60.1-56.1 60.1-99.3 0-61.9-50.1-112-112-112zm88 432H80V256h184c57.4 0 104 46.6 104 104s-46.6 104-104 104zM80 48h160c53 0 96 43 96 96s-43 96-96 96H80z"})
);

export default LanBoldThin;
