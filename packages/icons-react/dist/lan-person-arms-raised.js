import React from 'react';

export const LanPersonArmsRaised = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.004 384 576.004',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M47.7-19.1C46-27.8 37.5-33.4 28.9-31.7S14.6-21.5 16.3-12.9l6.9 34.5c10.5 52.4 44 95.2 88.8 118.7V528c0 8.8 7.2 16 16 16s16-7.2 16-16V368h96v160c0 8.8 7.2 16 16 16s16-7.2 16-16V140.3c44.8-23.5 78.3-66.3 88.8-118.7l6.9-34.5c1.7-8.7-3.9-17.1-12.6-18.8s-17.1 3.9-18.8 12.6l-6.9 34.5C316.3 80.9 258.8 128 192 128S67.7 80.9 54.6 15.3zM240 336h-96V153.2c15.3 4.4 31.4 6.8 48 6.8s32.7-2.4 48-6.8zM168 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m80 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0"})
);

export default LanPersonArmsRaised;
