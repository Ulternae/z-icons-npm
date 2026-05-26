import React from 'react';

export const LanHatCowboySideRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M253.8 80c-13.6 0-25.4 9.5-28.4 22.8L204.5 197c23.1 5.2 45.2 14.3 65.2 27.1h171.8l-26.9-121.2c-3-13.3-14.7-22.8-28.4-22.8h-1c-3.9 0-7.7.9-11.1 2.6-34 17-74.1 17-108.1 0-3.5-1.7-7.3-2.6-11.1-2.6h-1zm-97.4 112 22.2-99.7c7.8-35.2 39.1-60.3 75.2-60.3h1c11.3 0 22.5 2.6 32.6 7.7a72.65 72.65 0 0 0 65.2 0c10.1-5.1 21.3-7.7 32.6-7.7h1c36.1 0 67.4 25.1 75.2 60.3l22.4 100.8C571.7 202.9 640 277.5 640 368v4c0 42-34 76-76 76H76c-42 0-76-34-76-76v-20.3C0 264.6 69.7 193.8 156.4 192M495 243.8 529.8 400H564c15.5 0 28-12.5 28-28v-4c0-60-41.3-110.3-96.9-124.2zm-16.1 148.4L452.2 272H331zM159.7 240C98 240 48 290 48 351.7V372c0 15.5 12.5 28 28 28h336.4L258.7 275.1c-28-22.7-62.9-35.1-99-35.1"})
);

export default LanHatCowboySideRegular;
