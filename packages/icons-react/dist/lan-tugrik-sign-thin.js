import React from 'react';

export const LanTugrikSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h176v169.8L62.1 248.3c-4.3 1.1-6.9 5.4-5.8 9.7s5.4 6.9 9.7 5.8l118.1-29.5v79.5L62.2 344.3c-4.3 1.1-6.9 5.4-5.8 9.7s5.4 6.9 9.7 5.8L184 330.2V472c0 4.4 3.6 8 8 8s8-3.6 8-8V326.2l121.9-30.5c4.3-1.1 6.9-5.4 5.8-9.7s-5.4-6.9-9.7-5.8l-118.1 29.5v-79.5l121.9-30.5c4.3-1.1 6.9-5.4 5.8-9.7s-5.4-6.9-9.7-5.8L200 213.8V48h176c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanTugrikSignThin;
