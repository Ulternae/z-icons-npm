import React from 'react';

export const LanLayerGroup = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M266.1 34.2 468.9 128l-202.8 93.7c-6.4 3-13.8 3-20.1 0L43.1 128l202.8-93.8c6.4-3 13.7-3 20.1 0zm13.4-29c-14.9-6.9-32.1-6.9-47 0l-218.6 101C5.4 110.1 0 118.6 0 128s5.4 17.9 13.9 21.8l218.6 101c14.9 6.9 32.1 6.9 47 0l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8zM48.1 218.4l-34.2 15.8C5.4 238.1 0 246.6 0 256s5.4 17.9 13.9 21.8l218.6 101c14.9 6.9 32.1 6.9 47 0l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8L464 218.4 425.9 236l43.1 19.9-202.9 93.8c-6.4 3-13.8 3-20.1 0L43.1 256l43.1-20zM13.9 362.2C5.4 366.1 0 374.6 0 384s5.4 17.9 13.9 21.8l218.6 101c14.9 6.9 32.1 6.9 47 0l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8L464 346.4 425.9 364l43.1 19.9-202.9 93.8c-6.4 3-13.8 3-20.1 0L43.1 384l43.1-20-38.1-17.6z"})
);

export default LanLayerGroup;
