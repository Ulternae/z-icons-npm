import React from 'react';

export const LanArrowsSplitUpAndLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 512 543.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M331.3-27.3c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L304 22.6v287.8c-21.9-23.6-53.2-38.4-88-38.4H54.6l68.7-68.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 304H216c48.6 0 88 39.4 88 88 0 1.5.2 2.9.6 4.3C310.8 461.2 365.5 512 432 512h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-53 0-96-43-96-96V22.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z"})
);

export default LanArrowsSplitUpAndLeft;
