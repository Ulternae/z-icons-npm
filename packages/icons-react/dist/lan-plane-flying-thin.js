import React from 'react';

export const LanPlaneFlyingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M552.6 224.7c21.9 0 39.7 17.9 39.6 39.8S574.4 304 552.5 304H126.8c-24.4 0-46-15.8-53.4-39L34.9 144h33.2l61.2 76.5c1.4 2.1 3.9 3.6 6.6 3.6l93.5.1c2.6 0 5-1.2 6.5-3.3s1.9-4.7 1.2-7.2L179 32h65.5l174.7 189.9c1.5 1.6 3.6 2.6 5.9 2.6zm55.6 39.9c.1-30.8-24.8-55.8-55.6-55.9l-124-.2L253.9 18.6c-1.5-1.6-3.6-2.6-5.9-2.6h-80c-2.6 0-5 1.2-6.5 3.3s-1.9 4.7-1.2 7.2l58.2 181.7-78.6-.1L78.3 131c-1.5-1.9-3.8-3-6.2-3h-48c-2.6 0-5 1.2-6.5 3.3s-1.9 4.7-1.2 7.1l41.8 131.4c9.5 29.9 37.3 50.2 68.6 50.2h425.7c30.7 0 55.6-24.8 55.7-55.5zM40 496c-4.4 0-8 3.6-8 8s3.6 8 8 8h560c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanPlaneFlyingThin;
