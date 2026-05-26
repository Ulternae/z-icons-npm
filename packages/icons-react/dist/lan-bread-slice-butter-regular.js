import React from 'react';

export const LanBreadSliceButterRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 256v176h288V256c0-26.5 21.5-48 48-48 8.8 0 16-7.2 16-16 0-31.6-17.5-58.5-55.6-79.9-38.9-21.9-94.2-34.4-152.4-34.4s-113.5 12.4-152.4 34.4C65.5 133.6 48 160.5 48 192c0 8.8 7.2 16 16 16 26.5 0 48 21.5 48 48m336 0v176c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V256c-35.3 0-64-28.7-64-64 0-216.5 512-216.5 512 0 0 35.3-28.7 64-64 64m-265.4 9.4 50.7-50.7c12.5-12.5 32.8-12.5 45.3 0l50.7 50.7c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3"})
);

export default LanBreadSliceButterRegular;
