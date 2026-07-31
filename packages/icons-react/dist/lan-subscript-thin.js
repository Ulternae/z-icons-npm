import React from 'react';

export const LanSubscriptThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M72 64c-4.4 0-8 3.6-8 8s3.6 8 8 8h28l130.1 176L100 432H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h32c2.5 0 4.9-1.2 6.4-3.2L240 269.5l129.6 175.3c1.5 2 3.9 3.2 6.4 3.2h32c4.4 0 8-3.6 8-8s-3.6-8-8-8h-28L249.9 256 380 80h28c4.4 0 8-3.6 8-8s-3.6-8-8-8h-32c-2.5 0-4.9 1.2-6.4 3.2L240 242.5 110.4 67.2c-1.5-2-3.9-3.2-6.4-3.2zm456 296c0-2.7-1.3-5.1-3.5-6.6s-5-1.8-7.5-.8l-40 16c-4.1 1.6-6.1 6.3-4.5 10.4s6.3 6.1 10.4 4.5l29-11.6v124.2h-32c-4.4 0-8 3.6-8 8s3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-32v-136z"})
);

export default LanSubscriptThin;
