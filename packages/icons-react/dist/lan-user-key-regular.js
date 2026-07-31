import React from 'react';

export const LanUserKeyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 569.35',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 128a80 80 0 1 1 160 0 80 80 0 1 1-160 0m208 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0M48 480c0-70.7 57.3-128 128-128h96c14.6 0 28.6 2.4 41.7 6.9-5.9-16.3-9.3-33.8-9.7-52-10.4-1.9-21.1-2.9-32-2.9h-96C78.8 304 0 382.8 0 480v8c0 13.3 10.7 24 24 24s24-10.7 24-24zm528-176c0-61.9-50.1-112-112-112s-112 50.1-112 112c0 44.7 26.2 83.2 64 101.2v116.2c0 4.2 1.7 8.3 4.7 11.3l32 32c6.2 6.2 16.4 6.2 22.6 0l41.4-41.4c6.2-6.2 6.2-16.4 0-22.6L496 480l21.9-21.9c5.8-5.8 6.3-14.9 1.2-21.3l-20.9-26.1C543.3 396.3 576 353.9 576 304m-144-16a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
);

export default LanUserKeyRegular;
