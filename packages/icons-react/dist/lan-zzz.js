import React from 'react';

export const LanZzz = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M176 32c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4L214.6 128H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4L265.4 32zM0 240c0-8.8 7.2-16 16-16h192c6.1 0 11.6 3.4 14.3 8.8s2.1 11.9-1.5 16.8L48 480h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-6.1 0-11.6-3.4-14.3-8.8s-2.1-11.9 1.5-16.8L176 256H16c-8.8 0-16-7.2-16-16m304-16h128c6.2 0 11.8 3.5 14.4 9.1s1.9 12.1-1.9 16.9L337.3 384H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-6.2 0-11.8-3.5-14.4-9.1s-1.9-12.1 1.9-16.9l107.2-134H304c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanZzz;
