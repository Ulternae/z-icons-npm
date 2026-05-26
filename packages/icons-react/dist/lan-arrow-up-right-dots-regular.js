import React from 'react';

export const LanArrowUpRightDotsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M88.5 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h54.1L7.6 215c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V168c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24zm315.8 38.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0-76.2 0M280.2 194.2a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0-76.2 0m162.2-38.1a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2M156.7 317.8a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0-76.2 0m161.6-38.1a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2m86.1 38.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0-76.2 0m-333.8 86a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2m86.1 38.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0-76.2 0m161.6-38.1a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2m86.1 38.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0-76.2 0"})
);

export default LanArrowUpRightDotsRegular;
