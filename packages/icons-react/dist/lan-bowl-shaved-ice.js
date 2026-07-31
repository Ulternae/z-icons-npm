import React from 'react';

export const LanBowlShavedIce = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 192c0 5.4-.3 10.7-.8 16h32.1c.4-5.3.7-10.6.7-16C416 86 330 0 224 0S32 86 32 192c0 5.4.2 10.7.7 16h32.1c-.5-5.3-.8-10.6-.8-16 0-88.4 71.6-160 160-160s160 71.6 160 160M16 256c-8.8 0-16 7.2-16 16v16c0 70.7 57.3 128 128 128h9.8l-25 74.9c-1.6 4.9-.8 10.2 2.2 14.4s7.8 6.6 13 6.6h192c5.1 0 10-2.5 13-6.6s3.8-9.5 2.2-14.4l-25-74.9h9.8c70.7 0 128-57.3 128-128v-16c0-8.8-7.2-16-16-16zm112 128c-53 0-96-43-96-96h384c0 53-43 96-96 96h-32c-5.1 0-10 2.5-13 6.6s-3.8 9.5-2.2 14.4l25 74.9H150.2l25-74.9c1.6-4.9.8-10.2-2.2-14.4s-7.8-6.6-13-6.6z"})
);

export default LanBowlShavedIce;
