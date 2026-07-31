import React from 'react';

export const LanCircleEuro = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m279.9-128h33c8.8 0 16 7.2 16 16s-7.2 16-16 16h-33c-35.7 0-66.8 19.3-83.6 48H256c8.8 0 16 7.2 16 16s-7.2 16-16 16h-71.4c-1 5.4-1.4 11-1.4 16.8 0 5.2.4 10.3 1.2 15.2h71.7c8.8 0 16 7.2 16 16s-7.2 16-16 16h-60.6c16.6 29.5 48.2 49.5 84.5 49.5h33c8.8 0 16 7.2 16 16s-7.2 16-16 16h-33c-54.4 0-101-33.8-119.8-81.5H136c-8.8 0-16-7.2-16-16s7.2-16 16-16h16c-.6-5-.9-10.1-.9-15.2 0-5.7.4-11.3 1.1-16.8H136c-8.8 0-16-7.2-16-16s7.2-16 16-16h24.7c19.2-46.9 65.4-80 119.2-80"})
);

export default LanCircleEuro;
