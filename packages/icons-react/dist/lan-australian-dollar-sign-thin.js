import React from 'react';

export const LanAustralianDollarSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 24v40c-53.2 1.3-96 44.8-96 98.4 0 48.6 35.4 89.9 83.5 97.3l54.7 8.4c40.2 6.2 69.9 40.8 69.9 81.5 0 45.5-36.9 82.4-82.4 82.4H320c-4.4 0-8 3.6-8 8s3.6 8 8 8h64v40c0 4.4 3.6 8 8 8s8-3.6 8-8v-40h13.6c54.4 0 98.4-44.1 98.4-98.4 0-48.6-35.4-89.9-83.5-97.3l-54.7-8.4c-40.2-6.2-69.9-40.8-69.9-81.5 0-45.5 36.9-82.4 82.4-82.4H456c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56V24c0-4.4-3.6-8-8-8s-8 3.6-8 8M128 56c1.1 0 2 .7 2.3 1.8L199.6 320H56.4l69.3-262.2c.3-1 1.2-1.8 2.3-1.8m75.8 280 36.5 138c1.1 4.3 5.5 6.8 9.8 5.7s6.8-5.5 5.7-9.8l-110-416.2C143.6 45.6 136.3 40 128 40s-15.6 5.6-17.8 13.7L.3 470c-1.1 4.3 1.4 8.6 5.7 9.8s8.6-1.4 9.8-5.7l36.5-138h151.6z"})
);

export default LanAustralianDollarSignThin;
