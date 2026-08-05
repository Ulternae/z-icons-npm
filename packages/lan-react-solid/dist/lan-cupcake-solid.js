import React from 'react';

export function LanCupcakeSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M240 0c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l6.1 6.1c3.4 3.4 5.3 7.9 5.3 12.7 0 9.9-8 17.9-17.9 17.9H160c-35.3 0-64 28.7-64 64v.8c-3.3.5-6.6 1.4-9.9 2.4L50.9 143C20.5 153.2 0 181.6 0 213.6 0 254.7 33.3 288 74.4 288h299.2c41.1 0 74.4-33.3 74.4-74.4 0-32-20.5-60.4-50.9-70.6l-35.3-11.8c-4.1-1.4-8.2-2.3-12.5-2.8 1.7-6.7 2.6-13.8 2.6-21C351.9 48.1 303.8 0 244.5 0zm11.8 512 22-176h-99.6l22 176zM64 336l24.8 136.6c4.1 22.8 24 39.4 47.2 39.4h11.8l-22-176zm236.2 176H312c23.2 0 43.1-16.6 47.2-39.4L384 336h-61.8z"})
  );
}

export default LanCupcakeSolid;
