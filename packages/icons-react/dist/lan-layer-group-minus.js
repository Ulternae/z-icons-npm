import React from 'react';

export const LanLayerGroupMinus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M368 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-101.9 98.2L468.9 224l-202.8 93.7c-6.4 3-13.8 3-20.1 0L43.1 224l202.8-93.8c6.4-3 13.7-3 20.1 0zm13.4-29c-14.9-6.9-32.1-6.9-47 0l-218.6 101C5.4 206.1 0 214.6 0 224s5.4 17.9 13.9 21.8l218.6 101c14.9 6.9 32.1 6.9 47 0l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8zM82.7 330.4l-68.8 31.8C5.4 366.1 0 374.6 0 384s5.4 17.9 13.9 21.8l218.6 101c14.9 6.9 32.1 6.9 47 0l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8l-68.7-31.8-38.1 17.6 77.7 35.9-202.9 93.8c-6.4 3-13.8 3-20.1 0L43.1 384l77.7-36z"})
);

export default LanLayerGroupMinus;
